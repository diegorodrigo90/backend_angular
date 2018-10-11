// Usando o mongoose
const mongoose = require( 'mongoose' );

// URL do banco
const dbURI = 'mongodb://34.229.232.161/db_finance';

// Conecta ao banco com variavel global (avaliar se esse é o melhor método)
mongoose.connect(dbURI);

// Eventos de conexão
// Sucesso
mongoose.connection.on('connected', function () {
  console.log('Conectado ao banco ' + dbURI);
});

// Erro
mongoose.connection.on('error',function (err) {
  console.log('Erro ao conectar: ' + err);
});

// Desconectado
mongoose.connection.on('disconnected', function () {
  console.log('Desconectado do banco de dados');
});

// Node parou
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongo desconctado do app');
    process.exit(0);
  });
});

// Variavel global
module.exports = mongoose;
