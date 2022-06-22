const express = require("express");
const bodyparse = require("body-parser");
const app = express();

app.use(bodyparse.urlencoded({extended:true}))
app.get('/' , function(req ,res){
    res.sendFile(__dirname+"/index.html")
})
app.post('/' , function(req , res){
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var res1 = num1 + num2;
    res.send(`The addtion of ` + num1 +" and " + num2 + " is " + res1 )
})

app.listen(3000, function(res){
    console.log("statered at port 3000");
})