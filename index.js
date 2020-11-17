const express = require('express')
const app = express();
const server  = require('http').Server(app);

const bodyParser = require('body-parser');
// const socket = require('/socket');
const db = require('./db');
const router = require('./network/routes');



db('mongodb://miguel:Maria2030@cluster0-shard-00-00.92kcc.mongodb.net:27017,cluster0-shard-00-01.92kcc.mongodb.net:27017,cluster0-shard-00-02.92kcc.mongodb.net:27017/gaminzinobe_db?ssl=true&replicaSet=atlas-8p5e8w-shard-0&authSource=admin&retryWrites=true&w=majority')

app.use(bodyParser.json());
router(app)

// socket.connect(server)

app.use('/app', express.static('public'));

server.listen(3000, function(){
    console.log('La Aplicacion esta escuchando en http://localhost:3000');

});
