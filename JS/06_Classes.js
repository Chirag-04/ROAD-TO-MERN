// classes -> we can use to avoid repetion of the code
// let say i have two objects with same properties
// so it is better to create a common template / schema 
// and repective object can copy that template uning their own instances
// a class is like a blueprint


const  dog = {
    "name" : "bruno",
    "leg" : 2 ,
    "speaks" : "bhow",
};

const cat = {
    "name" : "catu",
    "leg" : 3 ,
    "speaks" : "meow",
}

// now 
console.log("animal name " + dog["name"] + " legs count" + dog["leg"]);

//both of the object share same properties 
// so it is better to creata  a separate class



// static  fucntion  -> if you want call any property of class without instantiation we can use 
// let say calling a method without creation of an object 
class Animal{
    name
    leg
    speaks
    constructor(name , leg , speaks){
        this.name = name;
        this.leg = leg;
        this .speaks = speaks;
    }

    sayHello() {
        console.log("hi there " + this.speaks);
    }

    static sayHellStatic(){  // this method belongs to class Animal 
        console.log("hi there ")
    }
};

let dog_obj =  new Animal("doggie" ,  2  , "bhow");
console.log(dog_obj.name);
console.log(dog_obj.speaks);
dog_obj.sayHello();
// Animal.sayHello();
Animal.sayHellStatic();
// but we know Animal.sayHello() is not allowed 
// we can call method / function using an object

// but we can do so for static function
// The static keyword in JavaScript is used to define a method that belongs to the class itself rather than to instances of the class. This means that static methods can be called without creating an instance of the class.