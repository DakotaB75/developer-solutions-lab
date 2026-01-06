#include <iostream>

__global__ void checkGPU() {
    printf("Deploying application Thread ID: %d\n", threadIdx.x);
}

int main() {
    std::cout << "Checking GPU visibility for CUDA..." << std::endl;
    checkGPU<<<1, 5>>>();
    cudaDeviceSynchronize();
    std::cout << "GPU ready for experiments." << std::endl;
    return 0;
}