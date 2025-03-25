const Joi = require("joi")

const validateBooking = (booking) => {
    const schema = Joi.object({
        cart_id:Joi.number(),
        createdAt:Joi.date(),
        fineshed:Joi.date(),
        payment_method_id:Joi.number(),
        delivery_method_id:Joi.number(),
        discount_coupon_id:Joi.number(),
        status_id:Joi.number(),
    });

    return schema.validate(booking);
}

module.exports = { validateBooking };