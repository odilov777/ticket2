const { Cart_item, Ticket, Cart} = require("../models");
const { validateCart_item } = require("../validation/cart_itemValidation");

exports.createCart_item = async (req, res) => {
  const { error } = validateCart_item(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const cart_item = await Cart_item.create(req.body);
    res.status(201).send(cart_item);
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message);
  }
};

exports.getCart_items = async (req, res) => {
  try {
    const cart_items = await Cart_item.findAll();
    res.status(200).send(cart_items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCart_itemById = async (req, res) => {
  try {
    const cart_item = await Cart_item.findByPk(req.params.id, {
      include : [
        {
          model: Ticket,
          as: "ticket"
        },
        {
          model: Cart,
          as: "cart"
        }
      ]
    });
    if (!cart_item) return res.status(404).send("Cart_item not found");
    res.status(200).send(cart_item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCart_item = async (req, res) => {
  const { error } = validateCart_item(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const cart_item = await Cart_item.findByPk(req.params.id);
    if (!cart_item) return res.status(404).send("Cart_item not found");
    await cart_item.update(req.body);
    res.status(200).send(cart_item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCart_item = async (req, res) => {
  try {
    const cart_item = await Cart_item.findByPk(req.params.id);
    if (!cart_item) return res.status(404).send("Cart_item not found");

    const cart_itemData = cart_item.toJSON();

    await cart_item.destroy()
    res.status(204).send(cart_itemData);
  } catch (error) {
    res.status(500).send(error.message)
  }
};


