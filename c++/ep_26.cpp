#include <iostream>
#include <inttypes.h>
#include <string.h>
#include <stdio.h>
#include <math.h>
#include <stdbool.h>
#include <vector>

using namespace std;


static int returnReciprocalNum(int num){

    int Remainder = 1;
    int count = 0;

    while((Remainder%num) != 0){
        Remainder = (Remainder*10)%num;
//        cout << "(" << count << "," << Remainder << ")" ;
        count++;
        if(Remainder == 1 && count > 1){
            return count;
        }
        if(count >= 1000)
            return 1;
    }
    
    return count;
    
};

int main(int argc, char **argv){
    (void) argc; (void) argv;
    int i = 2;
    int recurD;
    int max = 1;
    while(i < 1000){
        recurD = returnReciprocalNum(i);
        cout << "i is: " << i << ".";
        cout << "recur count:" << recurD << endl;
        if(max < recurD) max = recurD;
        i++;
    }
    
    cout << "result: " << max << endl;
    system("pause");
    return 0;
}
