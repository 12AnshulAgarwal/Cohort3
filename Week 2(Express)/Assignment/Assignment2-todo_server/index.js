const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const users = [
  {
    uniqueid: 1,
    Title: "Playing",
    Description: [
        { Cricket: "Completed",},
      { Volleyball: "Completed",},
    ],
  },
  {
    uniqueid: 2,
    Title: "Studying",
    Description: [
      { SQL: "Completed",},
      { DSA: "Completed",},
    ],
  },
];
app.get("/todos", function (req, res) {
  res.status(200).json(users);
});

app.get("/todosid/:id",(req,res) =>{
    const todoid=parseInt(req.params.id);
    const todo=users.find(item=>item.uniqueid===todoid)
    if(todo){
        res.status(200).json(todo);
    }
    else{
        res.status(404).json({msg:"Not found"});
    }
    })

app.post("/todos",(req,res)=>{
    const{Title,Description}=req.body;
    let newId;
    if(users.length>0){
        newId=users[users.length-1].uniqueid+1;
    }
    else{
        newId=1;
    }
    const newTodo={
        uniqueid:newId,
        Title:Title,
        Description:Description
    };
    users.push(newTodo);
    res.status(201).json({id:newId})
})

app.put("/todos/:id",(req,res)=>{
  const todoid=parseInt(req.params.id);
  const{Title,Description}=req.body;
  const todoIndex=users.findIndex((item)=>item.uniqueid===todoid);
  if(todoIndex!==-1){
    users[todoIndex].Title=Title;
    users[todoIndex].Description=Description;

    res.status(200).json({
      msg:"Todo updates Successfully",todo:users[todoIndex]
    });
  }
  else{
    res.status(404).json({
      msg:"Todo not found"
    });
  }
});

app.delete("/todos/:id",(req,res)=>{
const todoid=parseInt(req.params.id);
const todoIndex=users.findIndex((item)=>item.uniqueid===todoid);
if(todoIndex!==-1){
  users.splice(todoIndex,1);
  res.status(200).json({
    msg:"Todo deleted successfully"
  });
}else{
  res.status(404).json({
    msg:"Todo not found"
  });
}
});
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
module.exports = app;
