const express = require("express");
const router = express.Router();
const Ticket_statusController = require("../controller/ticket_status.controller");

/**
 * @swagger
 * tags:
 *  name: Ticket_status
 *  description: Ticket_status management
 */

/**
 * @swagger
 * /api/ticket_statuss:
 *   post:
 *     tags: [Ticket_status]
 *     summary: Create a new Ticket_status
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
 *         description: Ticket_status created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/ticket_statuss", Ticket_statusController.createTicket_status);

/**
 * @swagger
 * /api/ticket_statuss:
 *   get:
 *     tags: [Ticket_status]
 *     summary: Get all Ticket_statuss
 *     responses:
 *       '200':
 *         description: List of Ticket_statuss
 *       '500':
 *         description: Server error
 */
router.get("/ticket_statuss", Ticket_statusController.getTicket_statuss);

/**
 * @swagger
 * /api/ticket_statuss/{id}:
 *   get:
 *     tags: [Ticket_status]
 *     summary: Get Ticket_status by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Ticket_status ID
 *     responses:
 *       '200':
 *         description: Ticket_status details
 *       '404':
 *         description: Ticket_status not found
 *       '500':
 *         description: Server error
 */
router.get("/ticket_statuss/:id", Ticket_statusController.getTicket_statusById);

/**
 * @swagger
 * /api/ticket_statuss/{id}:
 *   put:
 *     tags: [Ticket_status]
 *     summary: Update Ticket_status by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket_status ID
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
 *         description: Ticket_status updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Ticket_status not found
 *       '500':
 *         description: Server error
 */

router.put("/ticket_statuss/:id", Ticket_statusController.updateTicket_status);

/**
 * @swagger
 * /api/ticket_statuss/{id}:
 *   delete:
 *     summary: Delete Ticket_status by ID
 *     tags: [Ticket_status]
 *     description:  Ticket_statusni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Ticket_status ID
 *     responses:
 *       '200':
 *         description: Ticket_status deleted
 *       '404':
 *         description: Ticket_status not found
 *       '500':
 *         description: server error
 */
router.delete("/ticket_statuss/:id", Ticket_statusController.deleteTicket_status);

module.exports = router;
