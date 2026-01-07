![AWS Lab Architecture](diagrams/aws_lab.png)

![AWS](https://img.shields.io/badge/AWS-4B4B4B?style=flat&logo=amazonaws&logoColor=white)
![EC2](https://img.shields.io/badge/EC2-4B4B4B?style=flat&logo=amazonaws&logoColor=white)
![S3](https://img.shields.io/badge/S3-4B4B4B?style=flat&logo=amazons3&logoColor=white)
![DynamoDB](https://img.shields.io/badge/DynamoDB-4B4B4B?style=flat&logo=amazondynamodb&logoColor=white)
![CloudWatch](https://img.shields.io/badge/CloudWatch-4B4B4B?style=flat&logo=amazoncloudwatch&logoColor=white)

![C++](https://img.shields.io/badge/C%2B%2B-6E6E6E?style=flat&logo=cplusplus)
![C#](https://img.shields.io/badge/C%23-6E6E6E?style=flat&logo=csharp)
![Python](https://img.shields.io/badge/Python-6E6E6E?style=flat&logo=python)
![CUDA](https://img.shields.io/badge/CUDA-6E6E6E?style=flat&logo=nvidia)

![License](https://img.shields.io/badge/license-MIT-6E6E6E)
![Version](https://img.shields.io/badge/version-v1.0.0-6E6E6E)
# AWS Labs

Welcome to the AWS Experimentation Lab.

Explore core AWS services and deploy sample applications safely.

---

### Lab Structure

```text
aws-labs/
 ├─ README.md
 ├─ cpp/
 │  └─ s3_latency_probe.cpp
 ├─ csharp/
 │  └─ AwsHealthCheck.cs
 ├─ cuda/
 │  └─ gpu_visibility_check.cu
 ├─ env/
 │  ├─ environment.yml
 │  └─ requirements.txt
 └─ python/
    ├─ diagnostics/
    │  ├─ aws_env_check.py
    │  └─ permissions_probe.py
    └─ pipelines/
       └─ github_actions_sim.py
```

- **cpp/** – AWS SDK for C++ examples.  
- **csharp/** – AWS SDK for C# examples.  
- **cuda/** – GPU verification scripts (optional).  
- **env/** – Python dependencies (`requirements.txt`) or Conda (`environment.yml`).  
- **python/diagnostics/** – Validate AWS environment and IAM permissions.  
- **python/pipelines/** – Simulated CI/CD pipelines.

---

### Environment Setup

Before running any examples, ensure your local environment has the following installed:

1. **C++ Development**
   - Visual Studio 2022 Build Tools (with C++ Desktop workload)  
   - Optional: [AWS SDK for C++](https://aws.amazon.com/sdk-for-cpp/) (or include headers in your project)
   - CUDA Toolkit (for `.cu` scripts, optional): ensure `nvcc` is in PATH

2. **C# Development**
   - .NET 7 SDK or later
   - [AWS SDK for .NET](https://aws.amazon.com/sdk-for-net/)

3. **Python Development**
   - Python 3.9+  
   - Install dependencies:  
     ```bash
     pip install -r env/requirements.txt
     ```
   - Optional: Conda environment using `env/environment.yml`

4. **AWS Credentials**
   - Set `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` in environment variables  
   - Use sandbox or test accounts to prevent charges

5. **Verification**
   - Run diagnostic scripts to validate setup:
     ```bash
     python python/diagnostics/aws_env_check.py
     python python/diagnostics/permissions_probe.py
     ```
   - Expected output confirms connectivity and IAM permissions

**Notes**
- All scripts are safe and read-only.
- Backticks denote variables or environment keys: `AWS_ACCESS_KEY_ID`.
- Keyboard shortcuts in Visual Studio Code should use `kb(...)` notation.
- Include `Fixes #<number>` in PRs for traceability.