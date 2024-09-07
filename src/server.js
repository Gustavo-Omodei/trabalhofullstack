const express = require('express');
const pessoaRotas = require('./Routes/pessoaRotas');
const sequelize = require('./config/connection'); 

const app = express();

app.use(express.json());
app.use('/api', pessoaRotas);

sequelize.sync().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch(error => {
  console.error('Erro ao sincronizar com o banco de dados:', error);
});
