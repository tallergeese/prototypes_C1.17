//require your modules: express, and mysql
var mysql = require('mysql');
var express = require('express');
var fs = require('fs');
var app = express();

function handleRequest(req, res) {
  console.log('ajax request received');
  //define your connection info for mysql
  var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'c117db'
  });
  //define your handler for your mysql connection callback
  function connected_callback(res) {
    connection.query('SELECT * FROM items', handleRequest_queryResolved);
  };

  //perform your mysql query call
  connection.connect(connected_callback);

  //define your handler for your mysql query call response
  function handleRequest_queryResolved(err, rows, fields) {
    rows = rows
    sendData(res, rows);
  }

//handle your data from your response
  function sendData(res, rows) {
    res.send(rows);
  }
}
//return the data in json format to the front end request

//define your handler for the express web request
app.get('/', function(req, res){
  fs.readFile('index.html', function(err, data){
    if (err){
      console.log('error serving file');
    }
    else{
      res.end(data);
    }
  })
})
app.get('/api', handleRequest);

//set up your express server and start listening
app.listen(3306, function(){
  console.log('listening on port 3306!');
});