const express = require("express");
const app = express();

app.get('/',(req,res)=>{
   res.send("Welcome to the job portal");
});


app.listen(8080,()=>{
    console.log("server is running at port 8080");
});