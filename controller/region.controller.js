const { Region } = require("../models");
const { validateRegion } = require("../validation/regionValidation");

exports.createRegion = async (req, res) => {
  const { error } = validateRegion(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const region = await Region.create(req.body);
    res.status(201).send(region);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getRegions = async (req, res) => {
  try {
    const regions = await Region.findAll();
    res.status(200).send(regions);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getRegionById = async (req, res) => {
  try {
    const region = await Region.findByPk(req.params.id, {});
    if (!region) return res.status(404).send("Region not found");
    res.status(200).send(region);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateRegion = async (req, res) => {
  const { error } = validateRegion(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const region = await Region.findByPk(req.params.id);
    if (!region) return res.status(404).send("Region not found");
    await region.update(req.body);
    res.status(200).send(region);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteRegion = async (req, res) => {
  try {
    const region = await Region.findByPk(req.params.id);
    if (!region) return res.status(404).send("Region not found");

    const regionData = region.toJSON();

    await region.destroy()
    res.status(204).send(regionData);
  } catch (error) {
    res.status(500).send(error.message)
  }
};