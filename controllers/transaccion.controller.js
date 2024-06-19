const Transaccion = require('../models/transaccion');

const transaccionCtrl = {}

//create
transaccionCtrl.createTransaccion = async (req,res)=>{
    const transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
        res.json({'status': '1',
                  'msg': 'Transaccion Guardada'});
    } catch (error) {
        res.status(404).json({'status': '0',
            'msg': 'Error procesando operacion.'});
    }
}

//obtener todos
transaccionCtrl.getTransacciones = async (req, res) => {
    const transacciones = await Transaccion.find();
    res.json(transacciones);
}

transaccionCtrl.getTransaccionesPorDivisas = async (req, res) => {
    const { monedaOrigen, monedaDestino } = req.query;

    let filter = {};

    if (monedaOrigen) {
        filter.monedaOrigen = monedaOrigen;
    }

    if (monedaDestino) {
        filter.monedaDestino = monedaDestino;
    }

    try {
        const transacciones = await Transaccion.find(filter);
        res.json(transacciones);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener transacciones', error });
    }
}

module.exports = transaccionCtrl;