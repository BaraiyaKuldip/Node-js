// Write a programe to print 20 pallindrome number in file named pallindrome.txt
var http = require('http');
var server = http.createServer(function (request, response) {
     if (request.url == '/pallindrome') {

          let i = 0;
          let number = 0;
          for(i=1;i<=10;i++)
          {

               number = '121' + i;
          }
          let array_number = number.split('');
          console.log(number);
          console.log(array_number);
          let length = array_number.length - 1 ;
          
          if (array_number[0] == array_number[length]) {
              
               console.log("it is pallindrome number : " + number);

          }
           
          else{
               
               console.log("it is pallindrome number : " + number);

          }
     }
});
server.listen(5000);
console.log("Server ready ");