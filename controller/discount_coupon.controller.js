const { Discount_coupon } = require("../models");
const { validateDiscount_coupon } = require("../validation/discount_couponValidation");

exports.createDiscount_coupon = async (req, res) => {
  const { error } = validateDiscount_coupon(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const discount_coupon = await Discount_coupon.create(req.body);
    res.status(201).send(discount_coupon);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getDiscount_coupons = async (req, res) => {
  try {
    const discount_coupons = await Discount_coupon.findAll();
    res.status(200).send(discount_coupons);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getDiscount_couponById = async (req, res) => {
  try {
    const discount_coupon = await Discount_coupon.findByPk(req.params.id, {});
    if (!discount_coupon) return res.status(404).send("Discount_coupon not found");
    res.status(200).send(discount_coupon);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateDiscount_coupon = async (req, res) => {
  const { error } = validateDiscount_coupon(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const discount_coupon = await Discount_coupon.findByPk(req.params.id);
    if (!discount_coupon) return res.status(404).send("Discount_coupon not found");
    await discount_coupon.update(req.body);
    res.status(200).send(discount_coupon);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteDiscount_coupon = async (req, res) => {
  try {
    const discount_coupon = await Discount_coupon.findByPk(req.params.id);
    if (!discount_coupon) return res.status(404).send("Discount_coupon not found");

    const discount_couponData = discount_coupon.toJSON();

    await discount_coupon.destroy()
    res.status(204).send(discount_couponData);
  } catch (error) {
    res.status(500).send(error.message)
  }
};