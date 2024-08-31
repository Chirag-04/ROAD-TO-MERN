#include<iostream>
using namespace std ;
class Vehicle { 
    public:
    std::string color;
    // deafult constructor
    Vehicle(){
        std::cout<<"Vechile's default constructor called"<<std::endl;
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
    Car(){
        std::cout<<"Car's default constructor called"<<std::endl;
    }
    ~Car(){
        std::cout<<"Car's default destructor called"<<std::endl;
    }
};
class HondaCity : public Car {
    public : 

    HondaCity(){
        cout<<"Honda city's default constructor called"<<endl;
    }


    ~HondaCity(){
        cout<<"Honda city's default destructor called"<<endl;       
    }
};
 int main(){
    // Vehicle v;
    // Car c(6);
    HondaCity hc;
 }
