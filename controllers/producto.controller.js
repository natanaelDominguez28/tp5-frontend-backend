const Producto = require('../models/producto');

const productoCtrl = {};

productoCtrl.createProducto = async (req, res) => {
    const producto = new Producto(req.body);
    try {
        await producto.save();
        res.json({'status': '1',
                  'msg': 'Producto Guardado'});
    } catch (error) {
        res.status(404).json({'status': '0',
            'msg': 'Error procesando operacion.'});
    }
    
}
/*productoCtrl.getProductos = async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
}*/

productoCtrl.getProductosDestacados = async (req, res) => {
    try {
        const productosDestacados = await Producto.find({destacado: true});
        res.json(productosDestacados)
    } catch (error) {
        res.status(500).send({message: "Error al obtener productos destacados"});
    }
}

productoCtrl.getProducto = async (req, res) => {
    const producto = await Producto.findById(req.params.id);
    res.json(producto);
}

productoCtrl.updateProducto = async (req, res) => {
    const vproducto = new Producto(req.body);
    try {
        await Producto.updateOne({_id: req.body.id}, vproducto)
        res.json({'status': '1',
                  'msg': 'Producto Actualizado'});
    } catch (error) {
        res.status(400).json({'status':'0',
            'msg': 'Error procesando operacion.'});
    }
}

productoCtrl.deleteProducto = async (req, res) => {
    try {
        await Producto.deleteOne({_id: req.params.id});
        res.json({'status': '1',
                  'msg': 'Producto Eliminado'});
    } catch (error) {
        res.status(400).json({'status':'0',
            'msg': 'Error procesando operacion.'});
    }
}

module.exports = productoCtrl;