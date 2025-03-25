const { Status } = require("../models");
const { validateStatus } = require("../validation/statusValidation");

exports.createStatus = async (req, res) => {
  const { error } = validateStatus(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const status = await Status.create(req.body);
    res.status(201).send(status);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getStatuss = async (req, res) => {
  try {
    const statuss = await Status.findAll();
    res.status(200).send(statuss);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getStatusById = async (req, res) => {
  try {
    const status = await Status.findByPk(req.params.id, {});
    if (!status) return res.status(404).send("Status not found");
    res.status(200).send(status);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateStatus = async (req, res) => {
  const { error } = validateStatus(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const status = await Status.findByPk(req.params.id);
    if (!status) return res.status(404).send("Status not found");
    await status.update(req.body);
    res.status(200).send(status);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteStatus = async (req, res) => {
  try {
    const status = await Status.findByPk(req.params.id);
    if (!status) return res.status(404).send("Status not found");

    const statusData = status.toJSON();

    await status.destroy()
    res.status(204).send(statusData);
  } catch (error) {
    res.status(500).send(error.message)
  }
};