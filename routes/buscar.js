const express = require('express');
const router = express.Router();
const db = require('../models/bccd.js'); 

router.get('/', (req, res) => {
    res.render('index', { livro_encontrado: [] });
});

router.get('/buscar', async (req, res) => {
    const titulo = req.query.titulo;
    const campo_pesquisa = req.query['campo-pesquisa'];
    const ano = req.query.ano;

    if (!campo_pesquisa || (campo_pesquisa !== 'titulo' && campo_pesquisa !== 'ano')) {
        return res.render('index', { livro_encontrado: null, error: 'Tipo de pesquisa inválido. Tente novamente!' });
    }

    try {
        let resultados;
        if (campo_pesquisa === 'titulo') {
            if (!titulo) {
                return res.render('index', { livro_encontrado: null, error: 'Campo de título vazio! Digite um título válido.' });
            }
            resultados = await Livro.getByTitulo(titulo);
        } else if (campo_pesquisa === 'ano') {
            if (!ano) {
                return res.render('index', { livro_encontrado: null, error: 'Campo de ano vazio! Digite um ano válido.' });
            }
            resultados = await Livro.getByAno(ano);
        }

        if (resultados.length > 0) {
            return res.render('index', { livro_encontrado: resultados, error: null });
        } else {
            return res.render('index', { livro_encontrado: null, error: 'Livro não encontrado.' });
        }
    } catch (err) {
        console.error('Erro ao buscar livros:', err);
        return res.render('index', { livro_encontrado: null, error: 'Erro ao buscar livros.' });
    }
});

module.exports = router;
