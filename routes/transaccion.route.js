const transaccionCtrl = require('./../controllers/transaccion.controller');

const express = require('express');
const router = express.Router();

router.post('/', transaccionCtrl.createTransaccion);
router.get('/', transaccionCtrl.getTransacciones);
//router.get('/', transaccionCtrl.getTransaccionByEmail);
router.get('/', transaccionCtrl.getTransaccionesPorDivisas);

module.exports = router;