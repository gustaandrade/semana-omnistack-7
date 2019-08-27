const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://semana:2edcbgt6@cluster0-ouhyc.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use(require('./routes'));

app.listen(3333);