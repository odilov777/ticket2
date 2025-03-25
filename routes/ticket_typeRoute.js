const express = require("express");
const router = express.Router();
const Ticket_typeController = require("../controller/ticket_type.controller");

/**
 * @swagger
 * tags:
 *  name: Ticket_type
 *  description: Ticket_type management
 */

/**
 * @swagger
 * /api/ticket_types:
 *   post:
 *     tags: [Ticket_type]
 *     summary: Create a new Ticket_type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               color:
 *                 type: string
 *               name:
 *                 type: string
 *               ticket_id:
 *                 type: number
 *     responses:
 *       '201':
 *         description: Ticket_type created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/ticket_types", Ticket_typeController.createTicket_type);

/**
 * @swagger
 * /api/ticket_types:
 *   get:
 *     tags: [Ticket_type]
 *     summary: Get all Ticket_types
 *     responses:
 *       '200':
 *         description: List of Ticket_types
 *       '500':
 *         description: Server error
 */
router.get("/ticket_types", Ticket_typeController.getTicket_types);

/**
 * @swagger
 * /api/ticket_types/{id}:
 *   get:
 *     tags: [Ticket_type]
 *     summary: Get Ticket_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Ticket_type ID
 *     responses:
 *       '200':
 *         description: Ticket_type details
 *       '404':
 *         description: Ticket_type not found
 *       '500':
 *         description: Server error
 */
router.get("/ticket_types/:id", Ticket_typeController.getTicket_typeById);

/**
 * @swagger
 * /api/ticket_types/{id}:
 *   put:
 *     tags: [Ticket_type]
 *     summary: Update Ticket_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket_type ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               color:
 *                 type: string
 *               name:
 *                 type: string
 *               ticket_id:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Ticket_type updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Ticket_type not found
 *       '500':
 *         description: Server error
 */

router.put("/ticket_types/:id", Ticket_typeController.updateTicket_type);

/**
 * @swagger
 * /api/ticket_types/{id}:
 *   delete:
 *     summary: Delete Ticket_type by ID
 *     tags: [Ticket_type]
 *     description:  Ticket_typeni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Ticket_type ID
 *     responses:
 *       '200':
 *         description: Ticket_type deleted
 *       '404':
 *         description: Ticket_type not found
 *       '500':
 *         description: server error
 */
router.delete("/ticket_types/:id", Ticket_typeController.deleteTicket_type);

module.exports = router;
