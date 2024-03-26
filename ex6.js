var express = require('express') ;
var app = express();

app.get("/addition/:number1/:number2",function(request,response){

    let number1 = request.params.number1 ; 
    let number2 = request.params.number2 ; 

    let addition = parseInt(number1) + parseInt(number2) ;
    
    response.send(`number 1 is ${number1} , number 2 is ${number2} and addition is ${addition}`);

});
app.listen(5000);
console.log('server ready...')