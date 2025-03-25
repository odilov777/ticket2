const { Booking } = require("../models");
const { validateBooking } = require("../validation/bookingValidation");
const { Cart } = require("../models")
const { Payment_method } = require("../models")
const { Delivery_method } = require("../models")
const { Discount_coupon } = require("../models")
const { Status } = require("../models")

exports.createBooking = async (req, res) => {
  const { error } = validateBooking(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const booking = await Booking.create(req.body);
    res.status(201).send(booking);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getBookings = async (req, res) => {
  try {
    const  bookings = await Booking.findAll();
    res.status(200).send(bookings);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id, {
      include : [
        {
          model: Payment_method,
          as: "payment_method"
        },
        {
          model: Delivery_method,
          as: "delivery_method"
        },
        {
          model: Discount_coupon,
          as: "discount_coupon"
        },
        {
          model: Status,
          as: "status"
        },
        {
          model: Cart,
          as: "cart"
        },
      ]
    });
    if (!booking) return res.status(404).send("Booking not found");
    res.status(200).send(booking);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateBooking = async (req, res) => {
  const { error } = validateBooking(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) return res.status(404).send("Booking not found");
    await booking.update(req.body);
    res.status(200).send(booking);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) return res.status(404).send("Booking not found");

    const bookingData = booking.toJSON();

    await booking.destroy()
    res.status(204).send(bookingData);
  } catch (error) {
    res.status(500).send(error.message)
  }
};