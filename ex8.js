var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.post("/login/:email/:password",function(request,response){
    
    response.send("Login Successfully ....");

});



