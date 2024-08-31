
// so we can day callback as function inside funtion 
//or function calling function
// here we are passing function as an argument 


function add(a , b){
    function addtheseTwo(a , b){
        return a+b;
    }
    const res =  addtheseTwo(a , b);
    return res;

}

// function addTheseTwo(a , b){
//     return a+b;
// }

const ans  = add(1 , 2);
console.log(ans);


// setTimeut is also an example of callback

function greet(){
    console.log("Hello everyone");
}

// setTimeout(greet , 2000);


// what might be the logic of the setTimeout fucntion


function createSelfTimeout(fnTocall){
    for(let i=0 ; i<10000000000 ; i++){}
    // console.log("self created time out ");
    greet();
}



createSelfTimeout(greet);

// this is again an example of callback
// after a sleep of 10000000000 greet function is called 

