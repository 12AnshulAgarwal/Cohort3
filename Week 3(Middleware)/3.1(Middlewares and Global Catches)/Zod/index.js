const express=require("express");
const zod=require("zod");
/*npm install zod */
const app=express();
// {
//   email:string=>email
//   password:atleast 8 letters
//   country:"IN","US"
// }
// Doing all data validation one by one
const schema=zod.object({
   email:zod.string().email(),
   passwords:zod.string().min(8),
   country:zod.literal("IN").or(zod.literal("US")),
   Kidneys:zod.array(zod.number())
})
//requesting email,passwords as headers and country,Kidneys inside body
app.use(express.json());
app.post("/health-checkup",function(req,res){
const email=req.headers.email;
const passwords=req.headers.passwords;

const data={
   email:email,
   passwords:passwords,
   country:req.body.country,
   Kidneys:req.body.Kidneys
}
 const response=schema.safeParse(data);
 if(!response.success){
    res.status(400).json({
        msg:"Input is Invalid "
    })
 }else{
 res.send({
    response
 })
}
});

app.listen(3000);