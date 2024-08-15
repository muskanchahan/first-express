const express=require('express');
const app=express();
const http=require('http');
const server=http.createServer();

app.use((req,res,next)=>{
    res.send("</h1Hello to Node Js></h1>");
})

// server.listen(3000,()=>{
// console.log("the server is listening on the port 3000");
// })

//WE CAN START SERVER BY ONLY USE BY LISTEN NOT NEED TO CERATESERVER BECAUSE THE LISTEN FUNCTION ALREADY DO THE THIS HERE WE DO NOT NEED THIS

app.listen(3000,()=>{
    console.log("the server is listening on the port 3000");
})