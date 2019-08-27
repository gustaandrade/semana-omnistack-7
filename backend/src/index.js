const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);     // habilita o acesso ao protocolo http padrão do node
const io = require('socket.io')(server);        // habilita o acesso a conexões via websocket

mongoose.connect('mongodb+srv://semana:2edcbgt6@cluster0-ouhyc.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use((req, res, next) => {     // cria middleware próprio da aplicação no qual todas as rotas o utilizam
    req.io = io;

    next();     // garante que a aplicação continue sendo executada e não pare no middleware
});

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));     // toda vez que o endereço /files for acessado, o sistema irá procurar na pasta resized

app.use(require('./routes'));

server.listen(3333);