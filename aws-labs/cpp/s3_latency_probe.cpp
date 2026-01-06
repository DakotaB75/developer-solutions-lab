#include <aws/core/Aws.h>
#include <aws/s3/S3Client.h>
#include <aws/s3/model/ListBucketsRequest.h>
#include <iostream>

int main() {
    Aws::SDKOptions options;
    Aws::InitAPI(options);
    {
        Aws::S3::S3Client s3;
        auto outcome = s3.ListBuckets();
        if (outcome.IsSuccess()) {
            std::cout << "Buckets available:" << std::endl;
            for (auto const &bucket : outcome.GetResult().GetBuckets()) {
                std::cout << " - " << bucket.GetName() << std::endl;
            }
        } else {
            std::cerr << "Error listing buckets: " 
                      << outcome.GetError().GetMessage() << std::endl;
        }
    }
    Aws::ShutdownAPI(options);
    return 0;
}