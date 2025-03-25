const express = require("express");
const router = express.Router();
const SeatController = require("../controller/seat.controller");

/**
 * @swagger
 * tags:
 *  name: Seat
 *  description: Seat management
 */

/**
 * @swagger
 * /api/seats:
 *   post:
 *     tags: [Seat]
 *     summary: Create a new Seat
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector_id:
 *                 type: number
 *               row_number:
 *                 type: number
 *               number:
 *                 type: number
 *               venue_id:
 *                 type: number
 *               seat_type_id:
 *                 type: number
 *               location_in_schema:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Seat created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/seats", SeatController.createSeat);

/**
 * @swagger
 * /api/seats:
 *   get:
 *     tags: [Seat]
 *     summary: Get all Seats
 *     responses:
 *       '200':
 *         description: List of Seats
 *       '500':
 *         description: Server error
 */
router.get("/seats", SeatController.getSeats);

/**
 * @swagger
 * /api/seats/{id}:
 *   get:
 *     tags: [Seat]
 *     summary: Get Seat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Seat ID
 *     responses:
 *       '200':
 *         description: Seat details
 *       '404':
 *         description: Seat not found
 *       '500':
 *         description: Server error
 */
router.get("/seats/:id", SeatController.getSeatById);

/**
 * @swagger
 * /api/seats/{id}:
 *   put:
 *     tags: [Seat]
 *     summary: Update Seat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector_id:
 *                 type: number
 *               row_number:
 *                 type: number
 *               number:
 *                 type: number
 *               venue_id:
 *                 type: number
 *               seat_type_id:
 *                 type: number
 *               location_in_schema:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Seat updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Seat not found
 *       '500':
 *         description: Server error
 */

router.put("/seats/:id", SeatController.updateSeat);

/**
 * @swagger
 * /api/seats/{id}:
 *   delete:
 *     summary: Delete Seat by ID
 *     tags: [Seat]
 *     description:  Seatni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Seat ID
 *     responses:
 *       '200':
 *         description: Seat deleted
 *       '404':
 *         description: Seat not found
 *       '500':
 *         description: server error
 */
router.delete("/seats/:id", SeatController.deleteSeat);

module.exports = router;
