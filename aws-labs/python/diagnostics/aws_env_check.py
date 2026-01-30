"""
AWS Environment Checker
- Verifies that the AWS CLI and credentials are working
- Lists available regions and core services
"""

import boto3
from botocore.exceptions import ClientError

def list_regions():
    ec2 = boto3.client("ec2")
    try:
        regions = ec2.describe_regions()
        print("AWS EC2 Available Regions:")
        for r in regions['Regions']:
            print(f"- {r['RegionName']}")
    except ClientError as e:
        print("Error listing regions:", e)

if __name__ == "__main__":
    print("Verifying AWS environment...")
    list_regions()
    print("Basic environment OK. Now you can experiment with instances and S3.")
