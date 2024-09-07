const Pessoa = require('../Models/Pessoa');

exports.cadastrarPessoa = async (req, res) => {
    try {
        const { cpf, nome, telefone } = req.body;

        // Validação dos dados
        if (!cpf || !nome || !telefone) {
            return res.status(400).send('Todos os campos são obrigatórios');
        }

        // Criação de uma nova pessoa no banco de dados
        const novaPessoa = await Pessoa.create({ cpf, nome, telefone });
        res.status(201).json(novaPessoa);

    } catch (error) {
        // Log detalhado do erro
        console.error('Erro ao criar pessoa:', error.message || error); // Log do erro com detalhes
        res.status(500).send(`Erro ao criar pessoa: ${error.message || error}`);
    }
};

exports.listarPessoas = async (req, res) => {
    try {
      const pessoas = await Pessoa.findAll();
      res.render('user/list', { pessoas }); // Renderiza a view com a lista de usuários
    } catch (error) {
      res.status(500).send(error.message);
    }
  };