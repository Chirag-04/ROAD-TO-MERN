// lets create a counter 

// we can make use of set interval and clear interval method 


// and we know to use clear interval we have to set a varilable to setinterval 

var counter  = 5;

function count(){
    console.log(counter);
    counter--;
    if(counter ==0 ){
        // clear
        clearInterval(myTimer);
    }
}


// var myTimer =  setInterval(count , 1000);

// Terminal clock 

function printTime(){
    let time= new Date().toLocaleTimeString();
    console.log(time)
}


printTime();