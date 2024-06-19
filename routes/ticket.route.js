const ticketCtrl = require('./../controllers/ticket.controller');

const express = require('express');
const router = express.Router();

router.post('/', ticketCtrl.create);
router.get('/', ticketCtrl.getTickets);
router.put('/:id', ticketCtrl.updateTicket);
router.delete('/:id', ticketCtrl.deleteTicket);
router.get('/', ticketCtrl.getTicketByCategory);

module.exports = router;