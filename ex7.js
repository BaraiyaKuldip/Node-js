// Write a programe to print 20 pallindrome number in file named pallindrome.txt
var http = require('http');
var server = http.createServer(function (request, response) {
     
    let i = 1;
    let j = 2 ;
    let fix = 1000;
    let num = 0;

for (i=1;i<=5;i++)
{
    num = fix+i ;
    fix = 1000*j ;
    j++;
    console.log(num);
    
}

});
server.listen(5000);
console.log("Server ready ");