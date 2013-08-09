#include <iostream>
#define K  20

using namespace std;

void print_map(unsigned long [K+1][K+1]);
unsigned long path2(unsigned long [K+1][K+1]);

unsigned long path2 (unsigned long map[K+1][K+1]){

    map [K][K] = 0;

    for (int i = 0; i<K;i++)
   map[i][K] = 1;

    for (int j = 0;j<K;j++)
   map[K][j] = 1;

    for (int y = K-1;y>=0;y--){
   for (int x = K-1;x>=0;x--)
       map[x][y]= map[x+1][y] + map[x][y+1];
    }
}

void print_map(int M[K+1][K+1]){
    for (int i = 0;i<K+1;i++){
   for (int j = 0;j<K+1;j++)
       cout<<M[j][i]<<" ";
   cout<<endl;
    }
}



int main(){
    unsigned long map[K+1][K+1];
    for (int i = 0;i<K+1;i++)
       for (int j = 0;j<K;j++)
          map[i][j] = 0;

    path2(map);
    cout<<"Number of lattice paths: "<<map[0][0]<<endl;
    system("pause");
    return 0;
}
