
#include<bits/stdc++.h>
using namespace std;
class Vehicle{
    public:
    explicit Vehicle(int x){
        // to avoid implicit type casting
        cout<<"Vehicle avg is : "<< x << endl;
    }
};
int main(){
    Vehicle v(3.14);  // returns 
  }