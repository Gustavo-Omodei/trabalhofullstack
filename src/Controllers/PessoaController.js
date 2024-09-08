const Pessoa = require('../Models/Pessoa');

exports.cadastrarPessoa = async (req, res) => {
    try {
        const { cpf, nome, telefone } = req.body;

        if (!cpf || !nome || !telefone) {
            return res.status(400).send('Todos os campos são obrigatórios');
        }

        const novaPessoa = await Pessoa.create({ cpf, nome, telefone });

        res.render('cadastrar', { successMessage: 'Cadastrado com sucesso!' });
    } catch (error) {
        console.error('Erro ao criar pessoa:', error.message || error);
        res.status(500).send(`Erro ao criar pessoa: ${error.message || error}`);
    }
};
