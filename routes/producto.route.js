const productoCtrl = require('./../controllers/producto.controller');

const express = require('express');
const router = express.Router();

router.post('/', productoCtrl.createProducto);
router.get('/', productoCtrl.getProductos);
router.put('/:id', productoCtrl.updateProducto);
router.get('/', productoCtrl.getProductosDestacados);
router.delete('/:id', productoCtrl.deleteProducto);

module.exports = router;
