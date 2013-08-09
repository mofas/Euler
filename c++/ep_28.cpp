#include <iostream>
#include <inttypes.h>
#include <string.h>
#include <stdio.h>
#include <math.h>
#include <stdbool.h>



using namespace std;


    int main(int argc, char **argv){
        int sum = 1;
        int max = 1001;
        for(int i = 3; i <= max ; i+= 2){
            cout << i << endl;
            sum += (i*i*5 + (i-2)*(i-2)*3)/2;
        }
        cout << "sum:" << sum << endl;

        system("pause");
        return 0;
    }
