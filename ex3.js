// Write a programe to print 20 pallindrome number in file named pallindrome.txt
var http = require("http");
var server = http.createServer(function (request, response) {

   if (request.url == "/pallindrome") 
    {

      let totalPallindromeNumber = 0;
      let pallindromeNumber = [];
      let i = 0;
      let number = "";

      for (i = 1; i <= 9999; i++) 
       {

         number = "56" + i;
         let array_number = number.split("");
         // console.log(number);
         // console.log(array_number);
         // console.log(array_number.length);
         let length = array_number.length - 1;

         if (array_number.length == 2) 
          {

            if (array_number[0] == array_number[length]) 
             {
               console.log("it is pallindrome number : " + number);
               pallindromeNumber.push(number);
               console.log("Total pallindrome number : " + pallindromeNumber);
               totalPallindromeNumber = totalPallindromeNumber + 1;
               console.log(totalPallindromeNumber);
             }
            
             else 
              {
               // console.warn("it is not a pallindrome number : " + number);
              }
          }

          else if (array_number.length == 3) 
           {
            if (array_number[0] == array_number[length]) 
             {
               console.log("it is pallindrome number : " + number);
               pallindromeNumber.push(number);
               console.log("Total pallindrome number : " + pallindromeNumber);
               totalPallindromeNumber = totalPallindromeNumber + 1;
               console.log(totalPallindromeNumber);
             }
            
            else 
             {
               // console.warn("it is not a pallindrome number : " + number);
             }
           }
         
         else if (array_number.length == 4) 
          {
            if (array_number[0] == array_number[length] && array_number[1] == array_number[length - 1]) 
            {
               console.log("it is pallindrome number : " + number);
               pallindromeNumber.push(number);
               console.log("Total pallindrome number : " + pallindromeNumber);
               totalPallindromeNumber = totalPallindromeNumber + 1;
               console.log(totalPallindromeNumber);
            }
            
            else 
            {
               // console.warn("it is not a pallindrome number : " + number);
            }

          }
         
         else if (array_number.length == 5) 
          {
            if (array_number[0] == array_number[length] && array_number[1] == array_number[length - 1] )
             {
               console.log("it is pallindrome number : " + number);
               pallindromeNumber.push(number);
               console.log("Total pallindrome number : " + pallindromeNumber);
               totalPallindromeNumber = totalPallindromeNumber + 1;
               console.log(
                  "Total Count of Pallindrome numbers : " + totalPallindromeNumber
               );
               console.log(totalPallindromeNumber);
             }
              else 
               {
               // console.warn("it is not a pallindrome number : " + number);
               }
          }
         
         else if (array_number.length == 6) 
          {
            if (array_number[0] == array_number[length] && array_number[1] == array_number[length - 1] && array_number[2] == array_number[length - 2] ) 
             {
               console.log("it is pallindrome number : " + number);
               pallindromeNumber.push(number);
               console.log("Total pallindrome number : " + pallindromeNumber);
               totalPallindromeNumber = totalPallindromeNumber + 1;
               console.log(
                  "Total Count of Pallindrome numbers : " + totalPallindromeNumber
               );
               console.log(totalPallindromeNumber);
             } 
             else
              {
               // console.warn("it is not a pallindrome number : " + number);
              }
          }
          
          else if (array_number.length == 7) 
           {
            if ( array_number[0] == array_number[length] && array_number[1] == array_number[length - 1] && array_number[2] == array_number[length - 2] ) 
             { 
               console.log("it is pallindrome number : " + number);
               pallindromeNumber.push(number);
               console.log("Total pallindrome number : " + pallindromeNumber);
               totalPallindromeNumber = totalPallindromeNumber + 1;
               console.log("Total Count of Pallindrome numbers : " + totalPallindromeNumber);
               console.log(totalPallindromeNumber);
             } 
             else 
              {
               // console.warn("it is not a pallindrome number : " + number);
              }
           }

       }

    }
    
});
server.listen(5000);
console.log("Server ready ");
