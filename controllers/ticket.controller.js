const Ticket = require('../models/ticket');

const ticketCtrl = {}

//create
ticketCtrl.create = async (req, res) => {
    const ticket = new Ticket(req.body);
    try {
        await ticket.save();
        res.json({'status': '1',
                  'msg': 'Ticket Guardado'});
    } catch (error) {
        res.status(404).json({'status': '0',
            'msg': 'Error procesando operacion.'});
    }
}

//obtener todos
ticketCtrl.getTickets = async (req,res) => {
    const tickets = await Ticket.find();
    res.json(tickets);
}

//actualizar un ticket
ticketCtrl.updateTicket = async (req, res) => {
    const vticket = new Ticket(req.body);
    try {
        await Ticket.updateOne({_id: req.body.id}, vticket)
        res.json({'status': '1',
                  'msg': 'Ticket Actualizado'});
    } catch (error) {
        res.status(400).json({'status':'0',
            'msg': 'Error procesando operacion.'});
    }
}

//eliminar un ticket
ticketCtrl.deleteTicket = async (req,res) => {
    try {
        await Ticket.deleteOne({_id: req.params.id});
        res.json({'status': '1',
                  'msg': 'Ticket Eliminado'});
    } catch (error) {
        res.status(400).json({'status':'0',
            'msg': 'Error procesando operacion.'});
    }
}

//obtener un ticket por categoria
ticketCtrl.getTicketByCategory = async (req, res) => {
    try {
        await Ticket.find({categoria: req.params.categoria});
        res.json({'status': '1',
                  'msg': 'Ticket Obtenido'});
    } catch (error) {
        res.status(400).json({'status':'0',
            'msg': 'Error procesando operacion.'});
    }
}


module.exports = ticketCtrl;