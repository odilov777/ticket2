const { Human_category } = require("../models");
const { validateHuman_category } = require("../validation/human_categoryValidation");

exports.createHuman_category = async (req, res) => {
  const { error } = validateHuman_category(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const human_category = await Human_category.create(req.body);
    res.status(201).send(human_category);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getHuman_categorys = async (req, res) => {
  try {
    const human_categorys = await Human_category.findAll();
    res.status(200).send(human_categorys);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getHuman_categoryById = async (req, res) => {
  try {
    const human_category = await Human_category.findByPk(req.params.id, {});
    if (!human_category) return res.status(404).send("Human_category not found");
    res.status(200).send(human_category);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateHuman_category = async (req, res) => {
  const { error } = validateHuman_category(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const human_category = await Human_category.findByPk(req.params.id);
    if (!human_category) return res.status(404).send("Human_category not found");
    await human_category.update(req.body);
    res.status(200).send(human_category);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteHuman_category = async (req, res) => {
  try {
    const human_category = await Human_category.findByPk(req.params.id);
    if (!human_category) return res.status(404).send("Human_category not found");

    const human_categoryData = human_category.toJSON();

    await human_category.destroy()
    res.status(204).send(human_categoryData);
  } catch (error) {
    res.status(500).send(error.message)
  }
};