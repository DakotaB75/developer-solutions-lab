"""
CI/CD pipeline simulation for AWS
- Code deployment to S3
- Lambda trigger
"""

import boto3
import os

bucket_name = "aws-lab-sample-bucket"

def upload_to_s3(file_path):
    s3 = boto3.client("s3")
    try:
        s3.upload_file(file_path, bucket_name, os.path.basename(file_path))
        print(f"Archive {file_path} uploaded to {bucket_name}")
    except Exception as e:
        print("Error uploading file:", e)

if __name__ == "__main__":
    print("Simulating CI/CD pipeline...")
    test_file = "example.txt"
    with open(test_file, "w") as f:
        f.write("This archive is part of the AWS lab.")
    upload_to_s3(test_file)
