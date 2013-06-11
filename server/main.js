var express = require('express');
var path = require('path');

var app = express();

var CLIENT_DIR = path.resolve(__dirname + '/../client');

app.get('/', function(req, res) {
    console.log('Requested root page!' + CLIENT_DIR + '/index.html');
    res.sendfile(CLIENT_DIR + '/index.html');
    console.log('Served');
});

app.get('/playground/:dirName', function(req, res) {
    var dirName = req.params.dirName;
    console.log('Requested: ' + dirName);
    res.sendfile(CLIENT_DIR + '/' + dirName + '/' + dirName + '.html');
});

app.get('/js/common/:fileName', function(req, res) {
    var fileName = req.params.fileName;
    console.log('Requested: ' + fileName);
    res.sendfile(CLIENT_DIR + '/js_common/' + fileName);
});

app.get('/js/custom/:dirName/:fileName', function(req, res) {
    var dirName = req.params.dirName;
    var fileName = req.params.fileName;
    console.log('Requested: ' + req.params.fileName);
    res.sendfile(CLIENT_DIR + '/' + dirName + '/' + fileName);
});

app.listen(process.env.PORT, process.env.IP);
