const Joi = require("joi");
const ticket_statusModel = require("../models/ticket_status.model");

const validateTicket = (ticket) => {
    const schema = Joi.object({
        event_id:Joi.number(),
        seat_id:Joi.number(),
        price:Joi.number(),
        service_fee:Joi.number(),
        ticket_status_id:Joi.number(),
        ticket_type_id:Joi.number(),
    });

    return schema.validate(ticket);
}

module.exports = { validateTicket };