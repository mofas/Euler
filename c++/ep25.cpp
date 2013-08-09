#include <iostream>
#include <inttypes.h>
#include <string.h>
#include <stdio.h>
#include <math.h>
#include <stdbool.h>

using namespace std;



int main(int argc, char **argv)
{
    (void) argc; (void) argv;
    unsigned int index = 0;
    long double order = log10( (pow(((1+ sqrt(5.0))/2) , index)) / sqrt(5.0) );
    
    while(order < 1000){
        index++;
        order = log10( (pow(((1+ sqrt(5.0))/2) , index)) / sqrt(5.0));
        cout << "order:" << order << "index: " << index << endl;
    }
    
    cout << "result: " << index << endl;

    system("pause");
    return 0;
}
