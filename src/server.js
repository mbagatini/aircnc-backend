const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

// Conecta no mongoDB atlas - porta 2707
mongoose.connect('mongodb+srv://cluster:cluster@mycluster-zpv4l.mongodb.net/airbnb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());

app.use(routes);

app.listen(3030);