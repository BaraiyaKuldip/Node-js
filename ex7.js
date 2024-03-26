var express = require('express');
var app = express();

app.get('/exercise/:number',function(request,response){

    let number = request.params.number;

    if (parseInt((number % 2)) == 0){
        response.send("entered number is even");
    }
    else{
        response.send("entered number is odd");
    }
    

});


app.listen(5000);
console.log('server ready...')