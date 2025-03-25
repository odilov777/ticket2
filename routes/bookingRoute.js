const express = require("express");
const router = express.Router();
const BookingController = require("../controller/booking.controller");

/**
 * @swagger
 * tags:
 *  name: Booking
 *  description: Booking management
 */

/**
 * @swagger
 * /api/bookings:
 *   post:
 *     tags: [Booking]
 *     summary: Create a new Booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_id:
 *                 type: number
 *               createdAt:
 *                 type: string
 *                 format: date
 *               fineshed:
 *                 type: string
 *                 format: date
 *               payment_method_id:
 *                 type: number
 *               delivery_method_id:
 *                 type: number
 *               discount_coupon_id:
 *                 type: number
 *               status_id:
 *                 type: number
 *     responses:
 *       '201':
 *         description: Booking created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/bookings", BookingController.createBooking);

/**
 * @swagger
 * /api/bookings:
 *   get:
 *     tags: [Booking]
 *     summary: Get all Bookings
 *     responses:
 *       '200':
 *         description: List of Bookings
 *       '500':
 *         description: Server error
 */
router.get("/bookings", BookingController.getBookings);

/**
 * @swagger
 * /api/bookings/{id}:
 *   get:
 *     tags: [Booking]
 *     summary: Get Booking by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Booking ID
 *     responses:
 *       '200':
 *         description: Booking details
 *       '404':
 *         description: Booking not found
 *       '500':
 *         description: Server error
 */
router.get("/bookings/:id", BookingController.getBookingById);

/**
 * @swagger
 * /api/bookings/{id}:
 *   put:
 *     tags: [Booking]
 *     summary: Update Booking by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Booking ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_id:
 *                 type: number
 *               createdAt:
 *                 type: string
 *                 format: date
 *               fineshed:
 *                 type: string
 *                 format: date
 *               payment_method_id:
 *                 type: number
 *               delivery_method_id:
 *                 type: number
 *               discount_coupon_id:
 *                 type: number
 *               status_id:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Booking updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Booking not found
 *       '500':
 *         description: Server error
 */

router.put("/bookings/:id", BookingController.updateBooking);

/**
 * @swagger
 * /api/bookings/{id}:
 *   delete:
 *     summary: Delete Booking by ID
 *     tags: [Booking]
 *     description:  Bookingni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Booking ID
 *     responses:
 *       '200':
 *         description: Booking deleted
 *       '404':
 *         description: Booking not found
 *       '500':
 *         description: server error
 */
router.delete("/bookings/:id", BookingController.deleteBooking);

module.exports = router;
