const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const mysql = require('mysql');

////MYSQL
//const connection = mysql.createConnection({
//    host: 'localhost',
//    user: 'root',
//    password: 'asusdatabase',
//    database: 'test'
//});

const port = 8000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    'extended': 'true'
}));


//Усі адреси контролюються клієнтським ангуляром
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});


server.listen(port, function (err) {
    if (err) throw err;
    console.log('Server start on port 8000!');
});