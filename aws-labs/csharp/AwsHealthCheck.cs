using System;
using Amazon.EC2;
using Amazon.EC2.Model;

namespace AwsLab
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Verifying EC2 instances...");
            var client = new AmazonEC2Client();
            var request = new DescribeInstancesRequest();
            try
            {
                var response = client.DescribeInstancesAsync(request).Result;
                foreach (var res in response.Reservations)
                {
                    foreach (var inst in res.Instances)
                    {
                        Console.WriteLine($"Instance: {inst.InstanceId}, State: {inst.State.Name}");
                    }
                }
                Console.WriteLine("EC2 check completed. Release your machine.");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error EC2: {ex.Message}");
            }
        }
    }
}