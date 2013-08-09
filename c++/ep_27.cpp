#include <iostream>
#include <inttypes.h>
#include <string.h>
#include <stdio.h>
#include <math.h>
#include <stdbool.h>
#include <vector>


using namespace std;




   static bool checkPrimeByPrimeArray(vector<int>& primeArray, int num){
   		int primeLength = primeArray.size();
   		int prime;
   		int limit = (int) ceil(sqrt(num));

   		for(int i = 0 ; i < primeLength ; i++){
   			  prime = primeArray[i];
   			  if((num%prime) == 0){
   				    return false;
   			  }
     			if(prime > limit){
   		    		return true;
   			  }
   		}
   		return true;
   }

   static int getLastPrime(vector<int> primeArray){
     		return primeArray[primeArray.size()-1];
   }


   static void searchNextPrime(vector<int>& primeArray){
       int lastPrime = getLastPrime(primeArray);
   		  int checkNum = lastPrime+=2;
     		while(!checkPrimeByPrimeArray(primeArray, checkNum)){
   			    checkNum+=2;
   		  }
   		  primeArray.push_back(checkNum);
   }



   static bool checkPrime(vector<int>& primeArray , int num){
       int limit = (int) ceil(sqrt(num));
       while(limit > getLastPrime(primeArray)){
          searchNextPrime(primeArray);
       }
       return checkPrimeByPrimeArray(primeArray , num);
   }


   static int getMaxPrimeNumber(vector<int>& primeArray ,int a , int b){
      int count = 0;
      while(1){
         int testNum = abs(count*count + count*a + b);
         if(!checkPrime(primeArray, testNum))
             break;
         count++;
      }
      return count;
   }


   int main(int argc, char **argv){
       (void) argc; (void) argv;
       
       //init primeArray
       vector<int> primeArray;
       primeArray.push_back(2);
       primeArray.push_back(3);
       primeArray.push_back(5);
       primeArray.push_back(7);
       // get the prime below 1000
       checkPrime(primeArray, 1000*1000);

       int max = 0 ,
           bigA = 0,
           bigB = 0,
           getPrimeNo,
           coeff = 1;


       for(int a = - 999 ; a < 1001 ; a+= 2){
           int checkPrimeIndex = 1;
           int b = primeArray[checkPrimeIndex];
           while(b < 1000){
                getPrimeNo = getMaxPrimeNumber(primeArray , a , b);
                if(max < getPrimeNo){
                   max = getPrimeNo;
                   bigA = a;
                   bigB = b;
                   coeff = a*b;
                   cout << "a: " << bigA << ", b: " << bigB << " , coeff: " << coeff << " , max: " << max << endl;
                }
                getPrimeNo = getMaxPrimeNumber(primeArray , a , -b);
                if(max < getPrimeNo){
                   max = getPrimeNo;
                   bigA = a;
                   bigB = -b;
                   coeff = a*-b;
                   cout << "a: " << bigA << ", b: " << bigB << " , coeff: " << coeff << " , max: " << max << endl;
                }
                b = primeArray[checkPrimeIndex++];
           }
       }

       system("pause");
       return 0;
   }

