var express = require('express');
var router = express.Router();

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
router.get('/modelos', function(req, res, next) {
  res.render('modelos');
});

module.exports = router;
