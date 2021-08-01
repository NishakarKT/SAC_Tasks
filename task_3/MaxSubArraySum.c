#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <limits.h>

void print_array(char *label, int *arr, int size)
{
    // printing as an array
    printf("\n%s: [", label);
    for (int i = 0; i < size; i++)
    {
        if (i == size - 1)
        {
            printf("%d", arr[i]);
            break;
        }
        printf("%d, ", arr[i]);
    }
    printf("]\n");
}

int *get_input_array(int size)
{
    // dynamic memory allocation
    int *arr;
    arr = (int *)malloc(size * sizeof(int));

    // user's input for array elements
    for (int i = 0; i < size; i++)
    {
        printf("\nEnter A[%d]: ", i);
        scanf("%d", &arr[i]);
    }

    return arr;
}

int *get_random_array(int size)
{
    // dynamic memory allocation
    int *arr;
    arr = (int *)malloc(sizeof(int));

    // seed for rand() to generate completely random numbers each time
    srand(time(0));

    for (int i = 0; i < size; i++)
        arr[i] = rand() % 200 - 100; // obtaining random numbers in range [-100, 100]

    return arr;
}

/* ****************** O (n) ****************** */
// 1. For maximum contiguous sum, we have to only keep track of the numbers that increase this contiguous sum (positive numbers),
// 2. When the next number is negative, it will decrease this contiguous sum, so we compare the contiguous sum generated with the maximum contiguous sum achieved till now.
// 3. If the maximum contiguous sum achieved till now is less than the new contiguous subarray sum, we store this value as the new value for "max_subarray_sum"

void get_max_subarray_sum(int *num, int size)
{
    int max_subarray_sum = INT_MIN;
    int max_subarray_sum_track = 0;

    for (int i = 0; i < size; i++)
    {
        max_subarray_sum_track += num[i];

        if (max_subarray_sum < max_subarray_sum_track)
            max_subarray_sum = max_subarray_sum_track;

        if (max_subarray_sum_track < 0)
            max_subarray_sum_track = 0;
    }

    printf("Max Subarray Sum: %d\n", max_subarray_sum);
}

/* ****************** O (n^2) ****************** */
// 1. To obtain the maximum sub array sum, we calculate sum of each element of the array, with its next elements in all possible cases.
// 2. As we obtain the contiguous sums, we compare it with maximum contiguous sum achieved till now.
// 3. If the maximum contiguous sum achieved till now is less than the contiguous subarray sums generated at any time, we store this value as the new value for "max_subarray_sum"
//
// void get_max_subarray_sum(int *num, int size)
// {
//     int sum;
//     int max_subarray_sum = INT_MIN;
//     int max_subarray_index = 0;
//     int *max_subarray = (int *)malloc(size * sizeof(int));
//
//     for (int i = 0; i < size; i++)
//     {
//         sum = 0;
//         max_subarray_index = 0;
//
//         for (int j = i; j < size; j++)
//         {
//             sum += num[j];
//             if (max_subarray_sum < sum)
//             {
//                 max_subarray[max_subarray_index++] = num[j];
//                 max_subarray_sum = sum;
//             }
//         }
//     }
//
//     printf("Max Subarray Sum: %d\n", max_subarray_sum);
// }

int main()
{
    int n;
    int *A;
    int choice;

    // user's input for "n"
    printf("Enter n : ");
    scanf("%d", &n);

    printf("\nChoose an option:");

    // user's input for "choice", until a valid choice is entered
    do
    {
        printf("\n1: Generate a random array\n2: Create your own array\n");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            // generate random array
            A = get_random_array(n);
            print_array("My Array: ", A, n);
            get_max_subarray_sum(A, n);
            break;

        case 2:
            // use user's array
            A = get_input_array(n);
            print_array("My Array: ", A, n);
            get_max_subarray_sum(A, n);
            break;

        default:
            printf("Please enter a valid choice...\nChoose again:\n");
        }

    } while (choice != 1 && choice != 2);

    return 0;
}