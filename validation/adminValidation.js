const Joi = require("joi")

const validateAdmin = (admin) => {
    const schema = Joi.object({
        name:Joi.string().min(3).required(),
        login:Joi.string(),
        hashed_password:Joi.string().required(),
        is_active:Joi.boolean(),
        is_creator:Joi.boolean(),
        hashed_refresh_token:Joi.string(),
    });

    return schema.validate(admin);
}

module.exports = { validateAdmin };