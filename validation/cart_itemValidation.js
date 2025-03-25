const Joi = require("joi")

const validateCart_item = (cart_item) => {
    const schema = Joi.object({
        ticket_id:Joi.number(),
        cart_id:Joi.number(),
        quantity:Joi.number(),
    });

    return schema.validate(cart_item);
}

module.exports = { validateCart_item };