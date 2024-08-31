import express from "express";

const app = express(); // server created
app.listen(5000 ,()=>{
    console.log("Server is working");
})

app.get("/" , (req  ,res)=>{
    res.json({
        success : true , 
        products : ["key" , "chain"],
    })
})

