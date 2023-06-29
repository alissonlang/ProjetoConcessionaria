var express = require('express');
var router = express.Router();
const Comentario = require('../models/Comentario');
const Veiculo = require('../models/Veiculo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET categorias page. */
router.get('/categorias', function(req, res, next) {
  res.render('categorias');
});

/* GET contatos page. */
router.get('/contatos', function(req, res, next) {
  res.render('contatos');
});

/* GET modelos page. */
router.get('/modelos', async function(req, res, next) {
  var veiculos = await Veiculo.findAll();
  
  res.render('modelos', {veiculos: veiculos});
});

/* GET detalhes page */
router.get('/detalhes/:id', async function(req, res) {
  var veiculo = await Veiculo.findByPk(req.params.id);

  if (veiculo == null) {
    res.render("fail_find")
  } else {
    res.render('detalhes', {veiculo: veiculo});
  }
})

module.exports = router;
