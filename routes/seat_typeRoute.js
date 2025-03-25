const express = require("express");
const router = express.Router();
const Seat_typeController = require("../controller/seat_type.controller");

/**
 * @swagger
 * tags:
 *  name: Seat_type
 *  description: Seat_type management
 */

/**
 * @swagger
 * /api/seat_types:
 *   post:
 *     tags: [Seat_type]
 *     summary: Create a new Seat_type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Seat_type created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/seat_types", Seat_typeController.createSeat_type);

/**
 * @swagger
 * /api/seat_types:
 *   get:
 *     tags: [Seat_type]
 *     summary: Get all Seat_types
 *     responses:
 *       '200':
 *         description: List of Seat_types
 *       '500':
 *         description: Server error
 */
router.get("/seat_types", Seat_typeController.getSeat_types);

/**
 * @swagger
 * /api/seat_types/{id}:
 *   get:
 *     tags: [Seat_type]
 *     summary: Get Seat_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Seat_type ID
 *     responses:
 *       '200':
 *         description: Seat_type details
 *       '404':
 *         description: Seat_type not found
 *       '500':
 *         description: Server error
 */
router.get("/seat_types/:id", Seat_typeController.getSeat_typeById);

/**
 * @swagger
 * /api/seat_types/{id}:
 *   put:
 *     tags: [Seat_type]
 *     summary: Update Seat_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat_type ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Seat_type updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Seat_type not found
 *       '500':
 *         description: Server error
 */

router.put("/seat_types/:id", Seat_typeController.updateSeat_type);

/**
 * @swagger
 * /api/seat_types/{id}:
 *   delete:
 *     summary: Delete Seat_type by ID
 *     tags: [Seat_type]
 *     description:  Seat_typeni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Seat_type ID
 *     responses:
 *       '200':
 *         description: Seat_type deleted
 *       '404':
 *         description: Seat_type not found
 *       '500':
 *         description: server error
 */
router.delete("/seat_types/:id", Seat_typeController.deleteSeat_type);

module.exports = router;
