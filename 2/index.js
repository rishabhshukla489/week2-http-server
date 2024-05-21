const express =require('express')
const app=express();
var user=[{
    name: "RIshabh",
    kidneys: [{
        healthy:false
    }]
}]

app.get("/",(req,res)=>{
    const k=user[0].kidneys;
    const no=k.length;
    let noh=0;
    for(let i=0;i<k.length;i++){
        if(k[i].healthy){
            noh++
        }
    }
    const nouh=no-noh;
    console.log(k)
    res.json({
        no,noh,nouh
    })
})
app.use(express.json())
app.post("/",(req,res)=>{
    const isHealthy= req.body.isHealthy;
    user[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"done"
    })
})
app.put("/",(req,res)=>{
    for(let i=0;i<user[0].kidneys.length;i++){
        user[0].kidneys[i].healthy=true;
    }
    res.send()
})
app.delete("/",(req,res)=>{
    const newKidneys=[]
    for(let i=0;i<user[0].kidneys.length;i++){
        if(user[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        };
    }
    user[0].kidneys=newKidneys;
    res.send()
})
app.listen(3000)