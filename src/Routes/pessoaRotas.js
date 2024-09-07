const express = require('express');
const router = express.Router();
const PessoaController = require('../Controllers/PessoaController');

router.get('/pessoas', PessoaController.listarPessoas);
router.post('/pessoaCadastro', PessoaController.cadastrarPessoa);

module.exports = router;
