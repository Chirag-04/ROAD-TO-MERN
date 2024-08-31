const fs = require("fs");
//fs is the file sytem module in node js used for reading 
fs.readFile("SyncVsAsyn.txt" , "utf-8"  , function(err , data){
    console.log( data);
} ) // async function

console.log("hello")
for(let  i=0 ; i<20 ; i++){
    console.log("i am getting printed till file is reading  ");
}
// helps to read the file asyncrhonously 
// so hello will get printed first 