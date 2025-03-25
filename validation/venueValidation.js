const Joi = require("joi")

const validateVenue = (venue) => {
    const schema = Joi.object({
        name:Joi.string().required(),
        address:Joi.string(),
        location:Joi.string(),
        site:Joi.string(),
        phone:Joi.string().pattern(/^\+998\d{9}$/),
        schema:Joi.string().required(),
        region_id:Joi.number(),
        district_id:Joi.number(),
    });

    return schema.validate(venue);
}

module.exports = { validateVenue };