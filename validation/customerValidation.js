const Joi = require("joi")

const validateCustomer = (customer) => {
    const schema = Joi.object({
        first_name:Joi.string().min(3).required(),
        last_name:Joi.string(),
        phone:Joi.string().pattern(/^\+998\d{9}$/),
        hashed_password:Joi.string().required(),
        email:Joi.string().email().required(),
        birth_date:Joi.date(),
        gender_id:Joi.number(),
        lang_id:Joi.number(),
        hashed_refresh_token:Joi.string(),
    });

    return schema.validate(customer);
}

module.exports = { validateCustomer };