var value =  "Chirag Maini"
function cutTo( value , start , end ){
    var value = "Chirag Maini"
    var temp = "";
    for(let i=start ; i<=end ; i++){
        temp = temp + value[i];
    }
    return temp;
}
let ans  = value.slice(2 , 6);
console.log(ans);

let ans2 = cutTo(value ,2 , 5 );
console.log( ans2);

// split function

const sentence =  "hi my name is chirag maini"

const words = sentence.split(" ");

// so we put " " space as a dilemeter

console.log(words);
// array of strings


const self_name = 'chirag maini'
console.log(self_name.toUpperCase());


// Parse INT is used to parse the integer part
console.log(parseInt("555")); // 555
console.log(parseInt("456px")); //456
console.log(typeof(parseInt("456px")));  // return number 



// opeartions on array 
// push => used to push back the value to array
// pop  => pop out the value from the back of the array
// shift => pops from front 

const arr =  [1,2,3,4,5];
arr.shift(); // function
console.log(arr)
arr.unshift(0); // pull something to front
console.log(arr)

// const new_array = arr1.concat(arr2) -> to concatinate two arrays which we can store in some value 

