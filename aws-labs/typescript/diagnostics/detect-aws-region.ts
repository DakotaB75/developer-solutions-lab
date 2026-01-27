/**
 * detect-aws-region.ts
 * 
 * A simple script that checks what AWS Region is configured on your computer.
 * 
 * This is a LOCAL-ONLY check:
 * - No AWS credentials needed
 * - No internet connection needed
 * - Just reads environment variables and config files
 */

import * as os from "node:os";
import * as path from "node:path";
import * as fs from "node:fs/promises";

// ============================================================
// STEP 1: Helper functions
// ============================================================

/**
 * Safely get an environment variable.
 * Returns undefined if the variable doesn't exist or is empty.
 */
function getEnvVar(name: string): string | undefined {
  const value = process.env[name];
  if (value && value.trim().length > 0) {
    return value.trim();
  }
  return undefined;
}

/**
 * Try to read a file. Returns undefined if file doesn't exist.
 */
async function readFileIfExists(filePath: string): Promise<string | undefined> {
  try {
    return await fs.readFile(filePath, "utf8");
  } catch (error: any) {
    // File doesn't exist
    if (error.code === "ENOENT") {
      return undefined;
    }
    // Some other error (like permissions)
    throw error;
  }
}

/**
 * Parse an INI-style config file.
 * 
 * Example input:
 *   [default]
 *   region = us-east-1
 *   
 *   [profile dev]
 *   region = eu-west-1
 * 
 * Example output:
 *   {
 *     "default": { "region": "us-east-1" },
 *     "profile dev": { "region": "eu-west-1" }
 *   }
 */
function parseIniFile(text: string): Record<string, Record<string, string>> {
  const result: Record<string, Record<string, string>> = {};
  let currentSection = "";

  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();

    // Skip empty lines and comments
    if (!trimmed || trimmed.startsWith("#") || trimmed.startsWith(";")) {
      continue;
    }

    // Check if this line is a section header like [default] or [profile dev]
    const sectionMatch = trimmed.match(/^\[(.+)\]$/);
    if (sectionMatch) {
      currentSection = sectionMatch[1].trim();
      result[currentSection] = {};
      continue;
    }

    // Otherwise, it's a key = value line
    const equalsIndex = trimmed.indexOf("=");
    if (equalsIndex !== -1) {
      const key = trimmed.slice(0, equalsIndex).trim();
      const value = trimmed.slice(equalsIndex + 1).trim();
      if (currentSection && key) {
        result[currentSection][key] = value;
      }
    }
  }

  return result;
}

// ============================================================
// STEP 2: Detection functions
// ============================================================

/**
 * Which AWS profile is active?
 * Checks AWS_PROFILE env var, defaults to "default"
 */
function getActiveProfile(): string {
  return getEnvVar("AWS_PROFILE") ?? getEnvVar("AWS_DEFAULT_PROFILE") ?? "default";
}

/**
 * Check environment variables for region.
 */
function checkEnvironmentVariables(): string | undefined {
  // AWS_REGION takes priority, then AWS_DEFAULT_REGION
  return getEnvVar("AWS_REGION") ?? getEnvVar("AWS_DEFAULT_REGION");
}

/**
 * Check the AWS config file (~/.aws/config) for region.
 */
async function checkConfigFile(profile: string): Promise<string | undefined> {
  // AWS config file location (can be overridden with AWS_CONFIG_FILE)
  const configPath = getEnvVar("AWS_CONFIG_FILE") 
    ?? path.join(os.homedir(), ".aws", "config");

  const content = await readFileIfExists(configPath);
  if (!content) {
    return undefined;
  }

  const config = parseIniFile(content);

  // In the config file:
  // - "default" profile uses section [default]
  // - Other profiles use section [profile NAME]
  const sectionName = profile === "default" ? "default" : `profile ${profile}`;

  return config[sectionName]?.region;
}

// ============================================================
// STEP 3: Main function - ties it all together
// ============================================================

async function main(): Promise<void> {
  console.log("AWS Region Detection Tool");
  console.log("============================\n");

  const profile = getActiveProfile();
  console.log(`Active profile: ${profile}\n`);

  // Check #1: Environment variables
  const envRegion = checkEnvironmentVariables();
  if (envRegion) {
    console.log("Region found!");
    console.log(`   Region: ${envRegion}`);
    console.log(`   Source: Environment variable (AWS_REGION or AWS_DEFAULT_REGION)`);
    return;
  }

  // Check #2: AWS config file
  const configRegion = await checkConfigFile(profile);
  if (configRegion) {
    console.log("Region found!");
    console.log(`   Region: ${configRegion}`);
    console.log(`   Source: AWS config file (~/.aws/config)`);
    return;
  }

  // Nothing found
  console.log("No AWS region configured locally.\n");
  console.log("To fix this, you can either:");
  console.log("  1. Set an environment variable:");
  console.log("     export AWS_REGION=us-east-1\n");
  console.log("  2. Add region to ~/.aws/config:");
  console.log("     [default]");
  console.log("     region = us-east-1\n");

  process.exitCode = 1;
}

// Run the script
main().catch((error) => {
  console.error("Error:", error.message);
  process.exitCode = 2;
});