const { Event_type } = require("../models");
const { validateEvent_type } = require("../validation/event_typeValidation");

exports.createEvent_type = async (req, res) => {
  const { error } = validateEvent_type(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const event_type = await Event_type.create(req.body);
    res.status(201).send(event_type);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getEvent_types = async (req, res) => {
  try {
    const event_types = await Event_type.findAll();
    res.status(200).send(event_types);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getEvent_typeById = async (req, res) => {
  try {
    const event_type = await Event_type.findByPk(req.params.id, {});
    if (!event_type) return res.status(404).send("Event_type not found");
    res.status(200).send(event_type);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateEvent_type = async (req, res) => {
  const { error } = validateEvent_type(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const event_type = await Event_type.findByPk(req.params.id);
    if (!event_type) return res.status(404).send("Event_type not found");
    await event_type.update(req.body);
    res.status(200).send(event_type);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteEvent_type = async (req, res) => {
  try {
    const event_type = await Event_type.findByPk(req.params.id);
    if (!event_type) return res.status(404).send("Event_type not found");

    const event_typeData = event_type.toJSON();

    await event_type.destroy()
    res.status(204).send(event_typeData);
  } catch (error) {
    res.status(500).send(error.message)
  }
};