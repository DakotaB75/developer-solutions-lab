# Contributing to microsoft-dev-solutions
Your contributions are valued, and following these guidelines ensures a smooth and professional collaboration.

## Fork the Repository
To contribute, fork the repository to your GitHub account. This creates your personal copy that you can freely modify.

## Clone Your Fork
```bash
git clone https://github.com/[your-github-username]/microsoft-dev-solutions.git
```
Replace [your-github-username] with your GitHub handle.

## Setup Environment
Ensure your development environment is fully prepared:
Python 3.8+
Node.js
Conda (optional, if using Python environments)
Azure DevOps access (if required)
Azure ML workspace access (if applicable)

Validate your setup before making changes.

## Create a Branch
Always create a new branch for your contribution to keep the main branch stable:
```bash
git checkout -b [branch-name]
```

## Make Changes & Validate
```bash
npm install
npm test
python -m unittest
```
If your changes impact CI/CD pipelines or Azure ML pipelines, ensure those validations pass as well.

## Commit & Push
```bash
git add .
git commit -m "Message"
git push origin [branch-name]
```
## Open a Pull Request
Navigate to the main microsoft-dev-solutions repository.
Click New Pull Request.
Select your branch, provide a descriptive title and detailed description.
Submit your PR.

## Review & Merge
Monitor your PR and address feedback promptly.
Ensure all tests and builds pass.
Adhere to the Code of Conduct.
Only the maintainer DakotaB75 approves merges into the main/aws-labs branch.

## Contributor License Agreement
By contributing, you agree that your contributions are licensed under MIT No Attribution. This ensures the project remains free, open, and safe.