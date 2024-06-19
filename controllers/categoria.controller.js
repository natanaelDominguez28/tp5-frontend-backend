const Categoria = require('../models/categoria');

const categoriaCtrl = {}

//create
categoriaCtrl.createCategoria = async (req,res) => {
    const categoria = new Categoria(req.body);
    try {
        await categoria.save();
        res.json({'status': '1',
                  'msg': 'Categoria Guardada'});
    } catch (error) {
        res.status(404).json({'status': '0',
            'msg': 'Error procesando operacion.'});
    }
}

//obtener todos
categoriaCtrl.getCategorias = async (req,res) => {
    const categorias = await Categoria.find();
    res.json(categorias);
}

//obtener un categoria
categoriaCtrl.getCategoria = async (req,res) => {
    const categoria = await Categoria.findById(req.params.id);
    res.json(categoria);
}

module.exports = categoriaCtrl;