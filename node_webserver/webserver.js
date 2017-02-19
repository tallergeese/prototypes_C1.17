var http = require('http');
var fs = require('fs');
var server = http.createServer(requestHandler);
var port = 8888;

server.listen(port, function(){
    console.log('server listening');

});

function requestHandler(request, response){
    console.log('handling request');
    fs.readFile('index.html', function(err, data){
        if (err){
            response.writeHead(404);
            response.end(JSON.stringify(err));
            return;
        }
        else{
            response.writeHead(200);
            response.end(data);
        }
    });
}