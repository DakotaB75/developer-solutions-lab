/**
 * cliOutput.ts
 * 
 * A simple utility for consistent CLI output formatting.
 * Provides info, warn, and error message helpers with optional color support.
 * 
 * Usage:
 *   import { info, warn, error } from "./cliOutput";
 *   
 *   info("AWS CLI detected");
 *   warn("No AWS profile configured");
 *   error("AWS config file not found");
 * 
 * Output:
 *   [INFO] AWS CLI detected
 *   [WARN] No AWS profile configured
 *   [ERROR] AWS config file not found
 */

// Check if terminal supports colors
const supportsColor = process.stdout.isTTY ?? false;

// ANSI escape codes for colors
const colors = {
  reset: "\x1b[0m",
  blue: "\x1b[34m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
};

/**
 * Format a message with a level tag and optional color.
 */
function formatMessage(level: string, color: string, message: string): string {
  if (supportsColor) {
    return `${color}[${level}]${colors.reset} ${message}`;
  }
  return `[${level}] ${message}`;
}

/**
 * Print an info message.
 * Output: [INFO] message
 */
export function info(message: string): void {
  console.log(formatMessage("INFO", colors.blue, message));
}

/**
 * Print a warning message.
 * Output: [WARN] message
 */
export function warn(message: string): void {
  console.warn(formatMessage("WARN", colors.yellow, message));
}

/**
 * Print an error message.
 * Output: [ERROR] message
 */
export function error(message: string): void {
  console.error(formatMessage("ERROR", colors.red, message));
}