const express=require("express")
const app=express()


app.get('/',(req,res)=>{
    res.send('hello world')
})
app.post('/api',(req,res)=>{
    console.log(req.headers);
    res.send({
    "msg":"sdsdsd",
    "sas": "sasa"
    })
})

app.listen(3000)