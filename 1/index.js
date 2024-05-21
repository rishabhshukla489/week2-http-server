const express=require("express")
const app=express()
const bodyParser=require("body-parser")
console.log(typeof app)

app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.send('hello world')
})
app.post('/api',(req,res)=>{
    console.log(req.headers["authorization"]);
    console.log(req.body.msg)
    console.log(req.query.b)
    res.status(401).send({
    "msg":"",
    "sas": "sasa"
    })
})

app.listen(process.env.port)