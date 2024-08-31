
function sumOf10(){
    let ans = 0 ;
    for(let i=0 ; i<=10 ; i++){
        ans+=i;
    }
    console.log(ans);
}


setTimeout(sumOf10 , 1000); // async function control will reach to next line and this will execute after 1s
console.log("Hello World");




