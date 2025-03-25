const express = require("express");
const router = express.Router();
const TicketController = require("../controller/ticket.controller");

/**
 * @swagger
 * tags:
 *  name: Ticket
 *  description: Ticket management
 */

/**
 * @swagger
 * /api/tickets:
 *   post:
 *     tags: [Ticket]
 *     summary: Create a new Ticket
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               event_id:
 *                 type: number
 *               seat_id:
 *                 type: number
 *               price:
 *                 type: number
 *               service_fee:
 *                 type: number
 *               ticket_status_id:
 *                 type: number
 *               ticket_type_id:
 *                 type: number
 *     responses:
 *       '201':
 *         description: Ticket created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/tickets", TicketController.createTicket);

/**
 * @swagger
 * /api/tickets:
 *   get:
 *     tags: [Ticket]
 *     summary: Get all Tickets
 *     responses:
 *       '200':
 *         description: List of Tickets
 *       '500':
 *         description: Server error
 */
router.get("/tickets", TicketController.getTickets);

/**
 * @swagger
 * /api/tickets/{id}:
 *   get:
 *     tags: [Ticket]
 *     summary: Get Ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Ticket ID
 *     responses:
 *       '200':
 *         description: Ticket details
 *       '404':
 *         description: Ticket not found
 *       '500':
 *         description: Server error
 */
router.get("/tickets/:id", TicketController.getTicketById);

/**
 * @swagger
 * /api/tickets/{id}:
 *   put:
 *     tags: [Ticket]
 *     summary: Update Ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               event_id:
 *                 type: number
 *               seat_id:
 *                 type: number
 *               price:
 *                 type: number
 *               service_fee:
 *                 type: number
 *               ticket_status_id:
 *                 type: number
 *               ticket_type_id:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Ticket updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Ticket not found
 *       '500':
 *         description: Server error
 */

router.put("/tickets/:id", TicketController.updateTicket);

/**
 * @swagger
 * /api/tickets/{id}:
 *   delete:
 *     summary: Delete Ticket by ID
 *     tags: [Ticket]
 *     description:  Ticketni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Ticket ID
 *     responses:
 *       '200':
 *         description: Ticket deleted
 *       '404':
 *         description: Ticket not found
 *       '500':
 *         description: server error
 */
router.delete("/tickets/:id", TicketController.deleteTicket);

module.exports = router;
