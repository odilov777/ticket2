const { Customer_card, Customer} = require("../models");
const { validateCustomer_card } = require("../validation/customer_cardValidation");

exports.createCustomer_card = async (req, res) => {
  const { error } = validateCustomer_card(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const customer_card = await Customer_card.create(req.body);
    res.status(201).send(customer_card);
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message);
  }
};

exports.getCustomer_cards = async (req, res) => {
  try {
    const customer_cards = await Customer_card.findAll();
    res.status(200).send(customer_cards);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCustomer_cardById = async (req, res) => {
  try {
    const customer_card = await Customer_card.findByPk(req.params.id, {
      include : [
        {
          model: Customer,
          as: "customer"
        }
      ]
    });
    if (!customer_card) return res.status(404).send("Customer_card not found");
    res.status(200).send(customer_card);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCustomer_card = async (req, res) => {
  const { error } = validateCustomer_card(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const customer_card = await Customer_card.findByPk(req.params.id);
    if (!customer_card) return res.status(404).send("Customer_card not found");
    await customer_card.update(req.body);
    res.status(200).send(customer_card);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCustomer_card = async (req, res) => {
  try {
    const customer_card = await Customer_card.findByPk(req.params.id);
    if (!customer_card) return res.status(404).send("Customer_card not found");

    const customer_cardData = customer_card.toJSON();

    await customer_card.destroy()
    res.status(204).send(customer_cardData);
  } catch (error) {
    res.status(500).send(error.message)
  }
};