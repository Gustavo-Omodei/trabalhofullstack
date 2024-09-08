const express = require('express');
const router = express.Router();
const PessoaController = require('../Controllers/PessoaController');

router.get('/cadastrar', (req, res) => {
    res.render('cadastrar');
});
router.post('/pessoaCadastro', PessoaController.cadastrarPessoa);

module.exports = router;
