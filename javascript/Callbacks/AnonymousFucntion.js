
function fourth(n){
    return (n*n*n*n);
}

function sum_of_something( a   , b , callback){
    let val1 = callback(a );
    let val2  = callback(b);
    return val1+val2;
}


const ans3 =  sum_of_something(1 , 2, function (n){
    return (n*n*n*n);
});


console.log(ans3);



// Notes 
// here we can write entire fucntuion as an argument as well 
// so we dont need to give function a name 
