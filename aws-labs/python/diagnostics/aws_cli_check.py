import shutil
import subprocess


def check_aws_cli():
    aws_path = shutil.which("aws")

    if aws_path is None:
        print("AWS CLI detected: no")
        print("Reason: 'aws' command not found in PATH")
        return

    print("AWS CLI detected: yes")

    try:
        result = subprocess.run(
            ["aws", "--version"],
            capture_output=True,
            text=True,
            check=True
        )
        version_output = result.stdout.strip() or result.stderr.strip()
        print(f"Version: {version_output}")
    except Exception as exc:
        print("AWS CLI detected, but failed to retrieve version")
        print(f"Reason: {exc}")


if __name__ == "__main__":
    check_aws_cli()
