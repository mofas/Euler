#include <iostream>
#include <cmath>
#include <set>
#include <vector>
using namespace std;



static bool isDigitFifthPowersNo(int num){

    int sum = 0;
    int digit;
    vector<int> fifthNoArray;
    int copyNum = num;
    while(copyNum){
      digit = copyNum % 10;
      fifthNoArray.push_back(digit);
      copyNum /= 10;
    }

    for(int i = 0 , max = fifthNoArray.size(); i < max;i++){
       digit = fifthNoArray[i];
       sum += pow((double)digit, 5);
    }
    
    //cout << num << "," << sum << endl;
    
    if(num == sum)
        return true;
    else
        return false;
}




int main()
{

    vector<int> fifthNoArray;
    
    int sum = 0;
    
    for(int i = 2 , max = 6*pow((double)9 , 5); i < max ;i++){
        if(isDigitFifthPowersNo(i))
            fifthNoArray.push_back(i);
    }
    
    for(int i = 0 , max = fifthNoArray.size() ; i < max ; i++){
       sum += fifthNoArray[i];
       cout << fifthNoArray[i] << endl;
    }
    
    cout << sum << endl;
    
    //isDigitFifthPowersNo(1111);
    //isDigitFifthPowersNo(1023);
    //isDigitFifthPowersNo(22);
   
   
   
   
   system("pause");
   return 0;
}
