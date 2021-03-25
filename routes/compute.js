var express=require('express')

var router=express.Router();

router.get('/',(req,res)=>{
    let randomNo=(Math.random()*100)+1
    let data=req.query.x
    console.log(data)
    res.render('compute',{
        randSolution:`ceil applied to ${randomNo} is ${Math.ceil(randomNo)}`,
        querySolution:` ceil applied to ${data} is ${Math.ceil(data)}`
    })
})

module.exports=router