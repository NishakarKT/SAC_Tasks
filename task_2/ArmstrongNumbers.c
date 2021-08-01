#include <stdio.h>

unsigned int power(unsigned int base, unsigned int index)
{
    if (index == 1)
        return base;
    else
        return base * power(base, index - 1);
}

int get_total_digits(unsigned int num)
{
    if (num == 0)
        return 0;
    else
        return 1 + get_total_digits(num / 10);
}

int get_units_digit(unsigned int num)
{
    return num % 10;
}

unsigned int get_nth_power_digits_sum(unsigned int num, int total_digits)
{
    unsigned int nth_power_digits_sum = 0;

    while (num != 0)
    {
        nth_power_digits_sum += power(get_units_digit(num), total_digits);
        num /= 10;
    }

    return nth_power_digits_sum;
}

// validating armstrong number
int is_armstrong_number(unsigned int num)
{
    int total_digits = get_total_digits(num);
    unsigned int nth_power_digits_sum = get_nth_power_digits_sum(num, total_digits);

    if (num == nth_power_digits_sum)
        return 1;
    else
        return 0;
}

// looping through all the numbers validating and printing the armstrong numbers
void print_armstrong_numbers(unsigned int lower, unsigned int higher)
{
    for (unsigned int num = lower; num <= higher; num++)
        if (is_armstrong_number(num))
            printf("%u\n", num);
};

int main()
{
    // I have used unsigned int as Armstrong numbers are positive
    unsigned int n;

    printf("Enter n : ");
    scanf("%u", &n);

    print_armstrong_numbers(1, n);

    return 0;
}