const express = require("express");
const router = express.Router();
const Event_typeController = require("../controller/event_type.controller");

/**
 * @swagger
 * tags:
 *  name: Event_type
 *  description: Event_type management
 */

/**
 * @swagger
 * /api/event_types:
 *   post:
 *     tags: [Event_type]
 *     summary: Create a new Event_type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               parent_event_type:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Event_type created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/event_types", Event_typeController.createEvent_type);

/**
 * @swagger
 * /api/event_types:
 *   get:
 *     tags: [Event_type]
 *     summary: Get all Event_types
 *     responses:
 *       '200':
 *         description: List of Event_types
 *       '500':
 *         description: Server error
 */
router.get("/event_types", Event_typeController.getEvent_types);

/**
 * @swagger
 * /api/event_types/{id}:
 *   get:
 *     tags: [Event_type]
 *     summary: Get Event_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Event_type ID
 *     responses:
 *       '200':
 *         description: Event_type details
 *       '404':
 *         description: Event_type not found
 *       '500':
 *         description: Server error
 */
router.get("/event_types/:id", Event_typeController.getEvent_typeById);

/**
 * @swagger
 * /api/event_types/{id}:
 *   put:
 *     tags: [Event_type]
 *     summary: Update Event_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event_type ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               parent_event_type:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Event_type updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Event_type not found
 *       '500':
 *         description: Server error
 */

router.put("/event_types/:id", Event_typeController.updateEvent_type);

/**
 * @swagger
 * /api/event_types/{id}:
 *   delete:
 *     summary: Delete Event_type by ID
 *     tags: [Event_type]
 *     description:  Event_typeni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Event_type ID
 *     responses:
 *       '200':
 *         description: Event_type deleted
 *       '404':
 *         description: Event_type not found
 *       '500':
 *         description: server error
 */
router.delete("/event_types/:id", Event_typeController.deleteEvent_type);

module.exports = router;
