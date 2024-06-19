const Espectador = require('../models/espectador');

const espectadorCtrl = {}

//create
espectadorCtrl.createEspectador = async (req,res) => {
    const espectador = new Espectador(req.body);
    try {
        await espectador.save();
        res.json({'status': '1',
                  'msg': 'Espectador Guardado'});
    } catch (error) {
        res.status(404).json({'status': '0',
            'msg': 'Error procesando operacion.'});
    }
}

//obtener todos
espectadorCtrl.getEspectadores = async (req,res) => {
    const espectadores = await Espectador.find();
    res.json(espectadores);
}

//obtener un espectador
espectadorCtrl.getEspectador = async (req,res) => {
    const espectador = await Espectador.findById(req.params.id);
    res.json(espectador);
}

module.exports = espectadorCtrl;