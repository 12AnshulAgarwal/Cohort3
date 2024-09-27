const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
//1) GET /files-- Returns a list of files present
 const filesDir=path.join(__dirname,'files');
// app.get('/files',function(req,res){
//     fs.readdir(filesDir,function(err,files){
//         if(err){
//             return res.status(500).json({
//                 error:"Unable to read directory"});
//         }
//         res.status(200).json(files);
//     });
// });

//2) GET /file/:filename - Returns content of given file by name

app.get('/files/:filename',function(req,res){
    const name=req.params.filename;
    const filePath=path.join(filesDir,name);
    fs.readFile(filePath,'utf8',function(err,data){
                if(err){
 // If the error code is 'ENOENT', it means the file was not found 
 //'ENOENT' stands for "Error NO ENTry". It means that a file or directory does not exist.                  
                    if(err.code==='ENOENT'){
                    return res.status(404).json({error:'File not found'});
                }
                    else{
// If there was internal error in the code                    
                        return res.status(500).json({
                        error:"error reading the file"});
                }
            }
                res.status(200).send(data);
            });
        });
app.listen(3000);
module.exports = app;