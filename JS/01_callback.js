function add(a , b , fnToCall){
    let res = a +b;
    return res; 
    fnToCall(res);
}

function display1(res){
    console.log("sum in display1" , res);
}


function display2(res){
    console.log("sum in display1" , res);
}

// const ans = add(1 , 2);
// display1(ans);

// but let say we are  only allowed to use single statement 

const ans = add(1 , 2  , display1);
// so i have passed a fn as an argument 

// i am calling a function add which is calling back the fnToCall function