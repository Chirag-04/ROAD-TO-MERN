// let say we want sum of squares and cubes
function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}


// we dont need to creat3e separate sum fucntino as we are just need to now whether i want to calculate square or cube 

function sum_of_something( a   , b , callback){
    let val1 = callback(a , b);
    let val2  = callback(a , b);
    return val1+val2;
}


const ans1 = sum_of_something(a , b  , square);
const ans2 = sum_of_something(a , b  , cube);


console.log(ans1);
console.log(ans2);



// Notes 
// callback function are those function which are passed as an argument 