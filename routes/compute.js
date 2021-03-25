var express=require('express')

var router=express.Router();

router.get('/',(req,res)=>{
    let randomNumber=(Math.random()*100)+1
    let data=req.query.x
    console.log(data)
    res.render('compute',{
        randSolution:`ceil applied to ${randomNumber} is ${Math.ceil(randomNumber)}`,
        querySolution:` ceil applied to ${data} is ${Math.ceil(data)}`
    })
})

module.exports=router