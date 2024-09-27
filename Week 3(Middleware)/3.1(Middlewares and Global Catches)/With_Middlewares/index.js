const express=require("express");
const app=express();
function userMiddleware(req,res,next){
    const username = req.headers.username;  // Extracting from headers
    const password = req.headers.password;  // Extracting from headers
    if(username!="Anshul"||password!="pass"){
        res.status(403).json({
            msg:"Incorrect inputs",
        })
    }else{
     next();
    }
};
function KidneyMiddleware(req,res,next){
    const KidneyID = parseInt(req.query.KidneyID);  // Extracting from query
    if(KidneyID!=1 && KidneyID!=2){
        res.status(403).json({
            msg:"Incorrect inputs",
        })
    }else{
     next();
    }
};
app.get("/health-checkup",userMiddleware,KidneyMiddleware,function(req,res){
    res.send("Your heart is Healthy");
});

app.get("/kidney-check",userMiddleware,KidneyMiddleware,function(req,res){
    res.send("Your heart is Healthy");
});

app.get("/heart-check",userMiddleware,KidneyMiddleware,function(req,res){
    res.send("Your heart is Healthy");
});

app.listen(3000);


