const mysql = require('mysql2');
require('dotenv').config();

const connection =  mysql.createConnection({
  host: process.env.BCDD_HOST,
  user: process.env.BCDD_USER,
  port: process.env.BCDD_PORT,
  password: process.env.BCDD_PASSWORD,
  database: process.env.BCDD_DATABASE
});

connection.connect(err => {
  if (err) {
    return console.error('Erro ao conectar ao banco de dados: ' + err);
  }
  console.log('Conexão bem-sucedida ao banco de dados');
});

function consultar(query, callback) {
  connection.query(query, (err, resultados) => {
      if (err) {
          console.error('Erro ao consultar o banco de dados:', err);
          callback(err, null);
          return;
      }
      console.log('Resultados da consulta:', resultados); 
      callback(null, resultados);
  });
}

module.exports = {
  consultar, 
  connection
};

