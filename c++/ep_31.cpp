#include <iostream>
#include <cmath>
#include <set>
#include <vector>
using namespace std;



int coins[] = {1, 2, 5, 10, 20, 50, 100, 200};


int main()
{

   int coinsType = sizeof(coins) / sizeof(coins[0]);
   int target = 200;
   int ways[target][coinsType];
   
   for(int i = 0 ; i <= target ; i++){
           cout << i << " : " ;
           for(int j = 0 ; j < coinsType ; j++){
                   if(j == 0 || i == 0){
                        ways[i][j] = 1;
                   }
                   else{
                        ways[i][j] = ways[i][j-1];
                        if(i >= coins[j]){
                             ways[i][j] = ways[i][j-1] + ways[i - coins[j]][j];
                        }
                   }
                   cout << ways[i][j] << " ";
           }
           cout << endl;
   }
   

   system("pause");
   return 0;
}


