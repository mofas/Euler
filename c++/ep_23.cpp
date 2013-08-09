#include <iostream>
#include <inttypes.h>
#include <string.h>
#include <stdio.h>
#include <math.h>
#include <stdbool.h>

// http://mathworld.wolfram.com/AbundantNumber.html
#define MAX (20161)

typedef uint16_t u16;
typedef uint32_t u32;
typedef uint64_t u64;

#define MAX_PRIMES (4000)
u32 primes[MAX_PRIMES];

static void
make_primes(void)
{
    primes[0] = 2;
    primes[1] = 3;
    u32 i = 1, j = 3;

    next:
    for (j += 2; primes[i] < 30000; j += 2) {

        #define PMOD (1<<1 | 1<<5)
        if ((PMOD & (1 << (j%6))) == 0)
            continue;

        u32 lim = (u32)sqrtf((float)j);

        for (u32 *p = primes; *p <= lim; p++)
            if (j % *p == 0)
                goto next;

        primes[++i] = j;
    }
}

static bool
is_abundant(u32 n)
{
    if (n % 12 == 0)
        return true;

    u32 orig = n, total = 1;
    for (u32 *p = primes; *p <= n && *p < orig; p++) {
        u32 sum = 1;
        while (n % *p == 0) {
            n /= *p;
            sum = (sum * *p) + 1;
        }
        total *= sum;
    }
    return total > (orig * 2);
}

int main(int argc, char **argv)
{
    (void) argc; (void) argv;

    make_primes();

    u32 a[7000], *p = a;
    for (u32 n = 12; n <= MAX; n++)
        if (is_abundant(n))
            *p++ = n;

    u32 total = 0;

    for (u16 n = 1; n < 24; n++)
        total += n;

    for (u32 n = 24; n <= MAX; n++) {
        u16 x = 0, y = 0;

        while ((a[x] + 12) < n)
            x++;

        u16 min = (x / 2) - 1;
        for (; x > min; x--) {
            while ((a[x] + a[y]) < n)
                y++;

            if ((a[x] + a[y]) == n)
                break;
        }

        if ((a[x] + a[y]) != n)
            total += n;
    }

    printf("%d\n", total);
    system("pause");
    return 0;
}
