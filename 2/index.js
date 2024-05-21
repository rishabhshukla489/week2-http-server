const express=require("express")
const app=express();
function sum(n){
    return n*4
}
app.get("/",function(req,res){
    const n1=req.query.n;
    const um=sum(n1)
    console.log(n1)
    console.log(um)
    res.json({"messgae":um})
})
app.listen(3000)