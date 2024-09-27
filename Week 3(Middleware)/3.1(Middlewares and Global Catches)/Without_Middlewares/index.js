const express=require("express");
const app=express();
app.get("/health-checkup",function(req,res)
{
    const KidneyId=req.query.KidneyId;// Extract KidneyId from query params
    const username=req.headers.username;// Extract username from request headers
    const password=req.headers.password;// Extract password from request headers
// Check if the username or password is incorrect
    if(username!="Anshul" || password!="pass"){
        res.status(403).json({
            msg:"User doesnt exist"
        })
        return
    }
    // Validate the KidneyId input
    if(KidneyId!=1&&KidneyId!=2){
        res.status(411).json({
            msg:"wrong inputs"
        })
        return
    }
    // If everything is fine, send the success message
    res.send("msg: Your heart is Healthy");
});

app.listen(3000);

/*What if i tell you to create another route for example "/kidney-check" 
then we have to repeat the same checks so we introduce now "MIDDLEWARES" */

