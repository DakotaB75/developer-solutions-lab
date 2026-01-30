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

## Project Structure

- `solutions/` – Documented technical solutions and experiments  
- `aws-labs/` – AWS-focused experiments  
- `azure-labs/` – Azure-focused experiments  
- `apps/` – Sample applications used for testing and validation  

---

## Maintainer

Maintained by **DakotaB75** as an independent open-source contributor.

This is a personal learning and experimentation project.  
There is no official support, SLA, or guaranteed stability.

---
## Support

If you find this project useful, consider supporting it via GitHub Sponsors.

---

## Thanks to our Sponsors

<a href="https://github.com/Crisfontana29" title="GitHub Sponsor 1">
  <img src="https://github.com/Crisfontana29.png" width="72" />
</a>

<a href="https://github.com/Kohenkyo" title="GitHub Sponsor 2">
  <img src="https://github.com/Kohenkyo.png" width="72" />
</a>

---

## License

This project is licensed under the MIT License.  
See the LICENSE file for details.
