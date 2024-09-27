const express=require("express");
const app=express();
app.use(express.json())
app.post("/health-checkup",function (req,res) {
    const kidneys=req.body.kidneys;
    const kidneylength=kidneys.length;
    res.send("your kidney length is "+kidneylength);
});
// example of global catches
app.use(function(err,req,res,next){
    res.json({
        msg:"sorry somthing went wrong"
    })
    
})
app.listen(3000,()=>{
    console.log("server is running")
});