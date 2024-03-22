var express = require('express');
var app = express();

app.get("/login",function(request,response){

    response.send(" This is Login Page ");

});

app.get("/register",function(request,response){

    response.send("This is Register Page ");

});

app.get("/changepassword",function(request,response){

    response.send("This is Change Password Page ");
});

app.get("/forgotpassword",function(request,response){

    response.send("This is Forgot Password Page ");

});

app.get("/Profile",function(request,response){

    response.send("This is Profile Page");

});



app.listen(5000);
console.log("Server is ready..");
