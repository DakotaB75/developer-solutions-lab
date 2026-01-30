"""
AWS Permissions Probe
- Verifies basic user permissions
- Shows what actions the user can perform in EC2, S3, and DynamoDB
- Educates the user about IAM roles and policies
"""

import boto3
from botocore.exceptions import ClientError

SERVICES = ["ec2", "s3", "dynamodb"]

def check_permissions(service):
    """Try listing basic resources to verify permissions"""
    client = boto3.client(service)
    try:
        if service == "ec2":
            client.describe_instances(MaxResults=5)
            print(f"[{service}] Permissions OK: You can list EC2 instances")
        elif service == "s3":
            client.list_buckets()
            print(f"[{service}] Permissions OK: You can list S3 buckets")
        elif service == "dynamodb":
            client.list_tables(Limit=5)
            print(f"[{service}] Permissions OK: You can list DynamoDB tables")
    except ClientError as e:
        print(f"[{service}] Permission denied or error: {e.response['Error']['Code']}")

if __name__ == "__main__":
    print("Starting AWS permissions check...")
    for svc in SERVICES:
        check_permissions(svc)
    print("Complete check. Make sure to use roles with minimal permissions for experimentation.")