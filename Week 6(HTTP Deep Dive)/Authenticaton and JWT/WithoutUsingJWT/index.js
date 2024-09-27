const express=require("express");
const app=express();
const users=[];//in memory variable which stores username,password and token
app.use(express.json());
//Create a function called generateToken that generates a random string for you
function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
                   'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
                   'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}
//user signup for the first time and in memory values get stored
app.post("/signup",function(req,res){
//we can also write input validations using zod here
const username=req.body.username;
const password=req.body.password;
//Create an in memory variable called users where you store the username , password and a token
users.push({
    username:username,
    password:password

})

res.json({
    message:"you are signed up"
})
console.log(users)
})
//user now signin to get access of his account he will will recieve one token
app.post("/signin",function(req,res){
const username=req.body.username;
const password=req.body.password;

let founduser=null;
for(let i=0;i<users.length;i++){
//hitting the database to check if user exist or not
    if(users[i].username===username&&users[i].password===password){
        founduser=users[i];
    }
}
if(founduser){
    const token=generateToken();
    founduser.token=token;
    res.json({
        message: "Signin successful",
        token: token  // Return the token in the response
    });
}
else{
    res.status(403).send({
msg:"Invalid username or password"
    })
}
console.log(users)
})
//if user will give correct token then the details of person will get print
app.get("/me",function(req,res){
    const token=req.headers.token;
    let founduser=null;
    for(let i=0;i<users.length;i++){
        if(users[i].token==token){
            founduser=users[i];
        }
    }
    if(founduser){
        res.json({
           username:founduser.username,
           password:founduser.password
        })
    }else{
        res.json({
            message:"token invalid"
        })
    }
})
app.listen(3000);