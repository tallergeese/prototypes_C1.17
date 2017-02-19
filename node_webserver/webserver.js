var http = require('http');
var fs = require('fs');
var server = http.createServer(requestHandler);
var port = 8888;

server.listen(port, function(){
    console.log('server listening');

});

function requestHandler(request, response){
    console.log('handling request');
    var path = request.url.slice(1);
    fs.readFile(path, function(err, data){
        if (err){
            fs.readFile('404.html', function(err,data){
                response.writeHead(404);
                response.end(data);
            });
        }
        else{
            response.setHeader('content-type', getMIME(path));
            response.setHeader('emoji-type', ':tim:');
            response.setHeader('secondary-emoji', ':little_g:');
            response.writeHead(200);
            response.end(data);
        }
    });
}

function getMIME(path){
    var extensionIndex = path.lastIndexOf('.') + 1;
    var extension = path.slice(extensionIndex);

    switch(extension){
        case 'html':
            return "text/html";
        case 'jpg':
            return "image/jpeg";
        case 'css':
            return 'text/css';
        default:
            return 'not sure, buddy';
    }
}