// let say we want sum of squares and cubes
function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function sum_of_sqaures(a , b){
    let val1 =  square(a);
    let val2 =  square(b);
    return val1+ val2;
}


function sum_of_cubes(a , b){
    let val1 =  cube(a);
    let val2 =  cube(b);
    return val1+ val2;
}
// violation of DRY principle 
// as sum of squares and sum of vubes function are very similar 



const ans1 = sum_of_sqaures(1 , 2);
const ans2 = sum_of_cubes(1 ,2 );


console.log(ans1);
console.log(ans2);
