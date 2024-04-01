const db = require('./db.js');

class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    static async getByTitulo(titulo) {
        const [rows] = await db.execute('SELECT * FROM livros WHERE titulo = ?', [titulo]);
        return rows;
    }

    static async getByAno(ano) {
        const [rows] = await db.execute('SELECT * FROM livros WHERE ano = ?', [ano]);
        return rows;
    }

    static async getByAutor(autor) {
        const [rows] = await db.execute('SELECT * FROM livros WHERE autor = ?', [autor]);
        return rows;
    }
}

module.exports = Livro;
