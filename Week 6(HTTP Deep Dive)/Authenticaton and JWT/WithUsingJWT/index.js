const express=require("express");
const jwt=require("jsonwebtoken");
const JWT_SECRET="randomanshul"
const app=express();
const users=[];//in memory variable which stores username,password and token
app.use(express.json());
//we dont have to Create any function called generateToken that generates a random string for you
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
    const token=jwt.sign({ 
        username:username//This line here converts username to random long string
    },JWT_SECRET);
    //founduser.token=token;   no use of storing token into database
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
    console.log(users);
    const token=req.headers.token;//jwt
    const decodedInformation=jwt.verify(token,JWT_SECRET);//converts jwt back to username
    const username = decodedInformation.username; // Extract username from decoded token
    const foundUser = users.find(user => user.username === username);

    if (foundUser) {
        const newToken = jwt.sign({ username: foundUser.username }, JWT_SECRET); // Re-sign the token with the username
        foundUser.token = newToken; // Update the user object with the new token
        res.json({ 
            username: username,
            password: foundUser.password
        })
    } else {
        res.status(403).send({ message: "Invalid username or password" });
    }
})
app.listen(3000);