const Joi = require("joi")

const validateEvent_type = (event_type) => {
    const schema = Joi.object({
        name:Joi.string().required(),
        parent_event_type:Joi.string().required(),
    });

    return schema.validate(event_type);
}

module.exports = { validateEvent_type };