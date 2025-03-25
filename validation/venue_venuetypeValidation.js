const Joi = require("joi")

const validateVenue_venuetype = (venue_venuetype) => {
    const schema = Joi.object({
        venue_id:Joi.number(),
        venue_type_id:Joi.number(),
    });

    return schema.validate(venue_venuetype);
}

module.exports = { validateVenue_venuetype };