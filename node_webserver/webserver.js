var http = require('http');
var server = http.createServer(requestHandler);

server.listen(8888, function(){
    console.log('server listening');

});

function requestHandler(request, response){
    console.log('handling request', request);
    response.write('initializing request response\n');
    response.end('It works!! Path Hit: ' + request.url);
}