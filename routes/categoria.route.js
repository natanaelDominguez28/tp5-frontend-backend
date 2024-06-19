const categoriaCtrl = require('./../controllers/categoria.controller');

const express = require('express');
const router = express.Router();

router.post('/', categoriaCtrl.createCategoria);
router.get('/', categoriaCtrl.getCategorias);
router.get('/:id', categoriaCtrl.getCategoria);

module.exports = router;