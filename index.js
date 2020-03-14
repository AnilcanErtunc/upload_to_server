var express = require("express");
var app = express();
var multer = require("multer");
var path = require("path");
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,__dirname+"/uploads");
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+path.extname(file.originalname));
    }
    

});
var upload = multer({storage:storage});

app.use(express.static("public"));

app.post("/upload",upload.single("photo"),(req,res)=> {
    if(req,file){
        res.json(req.file);
    }else throw "0";
    
});
app.listen(3000,()=>{
    console.log("Listenning 3000th port");
});