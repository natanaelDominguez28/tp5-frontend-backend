const mongoose = require('mongoose');

const {Schema} = mongoose;

const Espectador = require('./espectador');
const Categoria = require('./categoria');

const TicketSchema = new Schema({
    precioTicket:{type: Number, required:true},
    categoria:{type: Schema.Types.ObjectId, ref: Categoria, required: true},
    fechaCompra:{type: String, required: true},
    espectador: {type: Schema.Types.ObjectId, ref: Espectador, required: true}
})

module.exports = mongoose.models.TicketSchema || mongoose.model('Ticket',TicketSchema);