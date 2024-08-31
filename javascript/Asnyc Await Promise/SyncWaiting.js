
function sumOf10(){
    let ans = 0 ;
    for(let i=0 ; i<=10 ; i++){
        ans+=i;
    }
    console.log(ans);
}

function syncSleep(){
    for(let i=1 ; i<10000000000 ; i++){}
}
// i want that after sum time sum should be printed then "hello world "
 syncSleep();
sumOf10();
console.log("Hello World");

