# Azure Environment Variable Check (Python)

This helper script checks whether commonly used Azure-related
environment variables are present in your system.

The script does **not** connect to Azure, validate credentials,
or require an Azure account. It only reports whether variables
are set or missing.

---

## What does this script do?

It checks for the presence of common Azure environment variables, such as:

- `AZURE_CLIENT_ID`
- `AZURE_TENANT_ID`
- `AZURE_CLIENT_SECRET`
- `AZURE_SUBSCRIPTION_ID`

For each variable, the script prints whether it is set.

---

## What problem does this help diagnose?

This script helps identify issues where:
- Azure tools fail due to missing environment variables
- A development environment is not fully configured
- Scripts relying on Azure credentials fail early without clear errors

It is especially useful as a first-step diagnostic.

---

## How to run

Make sure Python is installed.

From the repository root, run:

```bash
python python/ml/azure_env_var_check.py
