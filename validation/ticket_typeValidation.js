const Joi = require("joi")

const validateTicket_type = (ticket_type) => {
    const schema = Joi.object({
        color:Joi.string().required(),
        name:Joi.string().required(),
        ticket_id:Joi.number()
    });

    return schema.validate(ticket_type);
}

module.exports = { validateTicket_type };