const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const routerRaiz = require('./routes/index');
const routerBuscar = require('./routes/buscar');

app.use('/', routerRaiz);
app.use('/buscar', routerBuscar);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});