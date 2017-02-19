var http = require('http');
var fs = require('fs');
var server = http.createServer(requestHandler);
var port = 8888;

server.listen(port, function(){
    console.log('server listening');

});

function requestHandler(request, response){
    console.log('handling request');
    var directory = request.url.slice(1);
    fs.readFile(directory, function(err, data){
        if (err){
            fs.readFile('404.html', function(err,data){
                response.writeHead(404);
                response.end(data);
            });
        }
        else{
            response.writeHead(200);
            response.end(data);
        }
    });
}