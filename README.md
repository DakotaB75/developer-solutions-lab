![Banner Dev Solutions](diagrams/azure_banner.png)

![Azure](https://img.shields.io/badge/Azure-0078D4?style=flat&logo=microsoftazure&logoColor=white)
![Python](https://img.shields.io/badge/Python-4B4B4B?style=flat&logo=python)
![C++](https://img.shields.io/badge/C%2B%2B-4B4B4B?style=flat&logo=cplusplus)
![C#](https://img.shields.io/badge/C%23-4B4B4B?style=flat&logo=csharp)
![CUDA](https://img.shields.io/badge/CUDA-4B4B4B?style=flat&logo=nvidia)
![Status](https://img.shields.io/badge/status-experimental-6E6E6E)

## Azure Labs

Focused on **environment validation**, **resource visibility**, and **latency diagnostics** using Python, C#, C++, and CUDA.

---

## Lab Structure

```text
azure-labs/
 ├─ README.md
 ├─ env/
 │  ├─ requirements.txt
 │  ├─ environment.yml
 │  └─ Dockerfile
 ├─ python/
 │  ├─ adx/
 │  │  └─ query_latency_test.py
 │  └─ ml/
 │     └─ azureml_env_check.py
 ├─ cpp/
 │  └─ filesystem_watcher.cpp
 ├─ csharp/
 │  └─ AzureResourceProbe.cs
 └─ cuda/
    └─ gpu_driver_check.cu
```
## Environment Preparation

Authenticate with Azure:

- Use Azure CLI or Visual Studio Code account sign-in.

- Verify with az account show.

CUDA samples require:
- NVIDIA GPU
- CUDA Toolkit installed and on `PATH`
CUDA components are optional and not required to run the core Azure labs.

Set required variables:

- AZURE_SUBSCRIPTION_ID

Install Python dependencies:

```text
pip install -r env/requirements.txt
```
Conda Setup

```text
conda env create -f env/environment.yml
conda activate azure-labs
```
## Run Diagnostics
Azure Resource Access (Python)

```text
python python/ml/azureml_env_check.py
```

Azure Data Explorer (ADX) Latency

```text
python python/adx/query_latency_test.py
```

Azure Resource Enumeration (C#)
```text
dotnet run --project csharp/AzureResourceProbe.c
```

Filesystem Monitoring (C++)
```text
g++ filesystem_watcher.cpp -std=c++17 -o watcher
./watcher
```
---
Notes

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
<a href="https://github.com/Crisfontana29" title="GitHub Sponsor: Crisfontana29">
  <img
    src="diagrams/Sponsors/Sponsor_Cristian.png"
    alt="Sponsor: Crisfontana29"
    width="96"
    height="96"
    style="border-radius: 50%;"
  />
</a>

<a href="https://github.com/Kohenkyo" title="GitHub Sponsor: Kohenkyo (Nat)">
  <img
    src="diagrams/Sponsors/Sponsor_Nat.png"
    alt="Sponsor: Kohenkyo"
    width="96"
    height="96"
    style="border-radius: 50%;"
  />
</a>

---

## Contributors

This project is maintained with the help of the open-source community.  
We thank the following contributors for their time and contributions:

- @Crisfontana29 — Documentation
- @Sharayu1418 — TypeScript diagnostics
- @poppyseeds — Azure documentation

---

## License

This project is licensed under the MIT License.  
See the LICENSE file for details.
