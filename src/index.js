const express = require('express');
const app = express();
const port = 3000;
app.use('/', require('./controller/crud'))

app.listen(port);
console.log('rodando na porta', port);

module.exports = app