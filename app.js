const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const routerRaiz = require('./routes/index');
const routerBuscar = require('./routes/buscar');

app.use(express.urlencoded({ extended: true }));
app.use('/', routerRaiz);
app.use('/buscar', routerBuscar);

app.post('/alugar', (req, res) => {
    const livroId = req.body.livro_id;
    res.redirect('/cadastro?livro_id=' + livroId); 
});

app.get('/cadastro', (req, res) => {
    const livroId = req.query.livro_id; 
    res.render('cadastro', { livro: {id:  livroId } } ); 
});

app.post('/cadastrar', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    res.send('Usuário cadastrado com sucesso!');
});

app.post('/excluir-cadastro', (req, res) => {
    res.send('Cadastro excluído com sucesso!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
