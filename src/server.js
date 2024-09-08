const express = require('express');
const path = require('path');
const pessoaRotas = require('./Routes/pessoaRotas');
const sequelize = require('./config/connection'); 

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'FrontEnd'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', pessoaRotas);

app.use(express.static(path.join(__dirname, 'FrontEnd')));


sequelize.sync().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch(error => {
  console.error('Erro ao sincronizar com o banco de dados:', error);
});
