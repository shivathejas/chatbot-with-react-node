var express = require('express');
var app = express();

app.get("/",(req,res)=>{
    res.send({
        data:"hello"
    })
})


app.listen(8000,()=>console.log("listening to port 8000"));