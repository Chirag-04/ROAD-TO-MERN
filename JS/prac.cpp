#include<bits/stdc++.h>
using namespace std;
class Vehicle{
    private:
    int x;
    protected:
    int y;
    public:
    int z;
};
class Car : public Vehicle{
    private :
    int m ;
    public:
    int n ;
    void setY(int val){
        y = val;
    }
    void setM(int val){
        m = val;
    }
    void print(){
        cout<<y<<" "<<m<<" "<<z<<" "<<n<<endl;
    }
};
int main(){
    Car c;
    c.z = 10; // z= 10 as it was public member 
    // but c.y = 20 will give an erro 
    // c.y =  1000; // error 
    c.setY(1000);
    // c.m =  123; // not allowed as it is private member 
    c.n = 321;
    c.print();
    c.setM(123);
    c.print();
    // to access the protected member of inherited class we will use getter setter 
    // also private member are not accessible outside the class so to initialize that we will again use getter setter

}