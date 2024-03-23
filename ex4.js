var express = require('express');
var app = express();

app.post("/login",function(request,response){

    response.send(" This is Login Page ");

});

app.post("/register",function(request,response){

    response.send("This is Register Page ");

});

app.get("/changepassword",function(request,response){

    response.send("This is Change Password Page ");
});

app.put("/forgotpassword",function(request,response){

    response.send("This is Forgot Password Page ");

});

app.delete("/Profile",function(request,response){

    response.send("This is Profile Page");

});



app.listen(5000);
console.log("Server is ready..");
