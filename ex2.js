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
    
    let i = 1;
    let print = '';

    for (i=1;i<=5;i++)
    {
        print += '*';
        console.log(print);
    }

    document.getElementById('idid').innerHTML = print ;
}




