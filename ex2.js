var http = require('http');
var server = http.createServer(function(request,response){

    
    response.writeHead(200,{'content-type':'text/html'});
    
    console.log(request.url);
    
    response.write(`<button class='btn' onclick='printTriangle()'>Print Triangle</button><div id='idid'>hii   </div>`);
    
    response.end();
})

server.listen(5000);
console.log("server is ready ...");

let printTriangle = function (){
    
    for (let j = 1; j <= 5; j++)
    {
        for (let i = 1; i <= 5; i++)
        {
            // document.getElementById('idid').innerHTML += "*" ;
            console.log('*');
            
        }
        // document.getElementById('idid').innerHTML += "<br>" ;
        console.log()
        
    }

}




