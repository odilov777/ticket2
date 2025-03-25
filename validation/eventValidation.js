const Joi = require("joi")

const validateEvent = (event) => {
    const schema = Joi.object({
        name:Joi.string().required(),
        photo:Joi.string(),
        start_date:Joi.date(),
        start_time:Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/).required(),
        finish_date:Joi.date(),
        finish_time:Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/).required(),
        info:Joi.string(),
        event_type_id:Joi.number(),
        human_category_id:Joi.number(),
        venue_id:Joi.number(),
        lang_id:Joi.number(),
        release_date:Joi.date(),
    });

    return schema.validate(event);
}

module.exports = { validateEvent };