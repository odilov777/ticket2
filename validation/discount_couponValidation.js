const Joi = require("joi")

const validateDiscount_coupon = (discount_coupon) => {
    const schema = Joi.object({
        discount:Joi.number().required(),
        finish_date:Joi.date()
    });

    return schema.validate(discount_coupon);
}

module.exports = { validateDiscount_coupon };