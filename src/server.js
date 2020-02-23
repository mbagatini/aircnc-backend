const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const socketio = require('socket.io');
const http = require('http');

const routes = require('./routes');

const app = express();
const server = http.server(app);
const io = socketio(server);

io.on('connection', socket => {
    console.log('Usuario conectado', socket.id);
});

// Conecta no mongoDB atlas - porta 2707
mongoose.connect('mongodb+srv://cluster:cluster@mycluster-zpv4l.mongodb.net/airbnb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Controla quem pode acessar a API
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

server.listen(3030);