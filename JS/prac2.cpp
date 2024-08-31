#include<iostream>
using namespace std ;
class Vehicle {
    private :
    int maxSpeed;
    protected:
    int numTyres;  
    public:
    std::string color;
    // deafult constructor
    Vehicle(){
        std::cout<<"Vechile's default constructor called"<<std::endl;
    }
    Vehicle(int n){
        cout<<"Vehicle parameterized constructor"<<endl;
        maxSpeed = n; // maxSpeed = 2
    }
    ~Vehicle(){
        std::cout<<"Vechile's default destructor called"<<std::endl;
    }
};
// we can also write 
// Car():Vehicle(){} (for calling the default constructor)
class Car : public Vehicle {
    public:
    int numGears;
    Car(int x , int y) :Vehicle(x){
        std::cout<<"Car's default constructor called"<<std::endl;
        numGears =  x; // numgead = 2
    }
    ~Car(){
        std::cout<<"Car's default destructor called"<<std::endl;
    }
    void print(){
        std::cout<<"num tyres"<< numTyres<<std::endl;
        std::cout<<"color"<< color<<std::endl;
        std::cout<<"num gears"<< numGears<<std::endl;
    }
};
class HondaCity : public Car {
    public : 
    HondaCity(int x , int y) : Car(x , y){
        cout<<"Honda city's default constructor called"<<endl;
    }  // x= 2 y =6
    ~HondaCity(){
        cout<<"Honda city's default destructor called"<<endl;       
    }
};
 int main(){
    // Vehicle v;
    // Car c(6);
    HondaCity h(2 , 6);
 }
