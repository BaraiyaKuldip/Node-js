// -> https://www.npmjs.com/package/qrcode
// Write a nodejs programe to qr code which has data link
// ->https://github.com/parampatel07/frontend27/

var QRCode = require('qrcode')

var express = require('express');
var app = express();

app.post("/login",function(request,response){

    response.send(" This is Login Page using post method");

});

app.post("/register",function(request,response){

    response.send("This is Register Page using post method ");

});

app.get("/changepassword",function(request,response){

    response.send("This is Change Password Page using get method ");
});

app.put("/forgotpassword",function(request,response){

    response.send("This is Forgot Password Page using put method");

});

app.delete("/Profile",function(request,response){

    response.send("This is Profile Page using delete method");

});


QRCode.toFile('login.png', 'This is Login Page', {
  color: {
    dark: '#008000',  // green dots
    light: '#FFFFFF' // white background
  }
}, function (err) {
  if (err) throw err
  console.log('done')
});


QRCode.toFile('register.png', 'This is Register Page', {
  color: {
    dark: '#FF0000',  // red dots
    light: '#FFFFFF' // white background
  }
}, function (err) {
  if (err) throw err
  console.log('done')
});



QRCode.toFile('changepassword.png', 'This is Change Password Page', {
  color: {
    dark: '#0000FF',  // blue dots
    light: '#FFFFFF' // white background
  }
}, function (err) {
  if (err) throw err
  console.log('done')
});


QRCode.toFile('forgotpassword.png', 'This is Forgot Password Page', {
  color: {
    dark: '#FFFF00',  // yellow dots
    light: '#000000' // black background
  }
}, function (err) {
  if (err) throw err
  console.log('done')
});


QRCode.toFile('profile.png', 'This is Profile Page', {
  color: {
    dark: '#FFA500',  // orange dots
    light: '#000000' // black background
  }
}, function (err) {
  if (err) throw err
  console.log('done')
});

app.listen(5000);
console.log("Server is ready..");