const express = require("express");
const router = express.Router();
const EventController = require("../controller/event.controller");

/**
 * @swagger
 * tags:
 *  name: Event
 *  description: Event management
 */

/**
 * @swagger
 * /api/events:
 *   post:
 *     tags: [Event]
 *     summary: Create a new Event
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               photo:
 *                 type: string
 *               start_date:
 *                 type: string
 *                 format: date
 *               start_time:
 *                 type: string
 *                 format: time
 *                 example: "00:00:00"
 *               finish_date:
 *                 type: string
 *                 format: date
 *               finish_time:
 *                 type: string
 *                 format: time
 *                 example: "00:00:00"
 *               info:
 *                 type: string
 *               event_type_id:
 *                 type: number
 *               human_category_id:
 *                 type: number
 *               venue_id:
 *                 type: number
 *               lang_id:
 *                 type: number
 *               release_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       '201':
 *         description: Event created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/events", EventController.createEvent);

/**
 * @swagger
 * /api/events:
 *   get:
 *     tags: [Event]
 *     summary: Get all Events
 *     responses:
 *       '200':
 *         description: List of Events
 *       '500':
 *         description: Server error
 */
router.get("/events", EventController.getEvents);

/**
 * @swagger
 * /api/events/{id}:
 *   get:
 *     tags: [Event]
 *     summary: Get Event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Event ID
 *     responses:
 *       '200':
 *         description: Event details
 *       '404':
 *         description: Event not found
 *       '500':
 *         description: Server error
 */
router.get("/events/:id", EventController.getEventById);

/**
 * @swagger
 * /api/events/{id}:
 *   put:
 *     tags: [Event]
 *     summary: Update Event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               photo:
 *                 type: string
 *               start_date:
 *                 type: string
 *                 format: date
 *               start_time:
 *                 type: string
 *                 format: time
 *                 example: "00:00:00"
 *               finish_date:
 *                 type: string
 *                 format: date
 *               finish_time:
 *                 type: string
 *                 format: time
 *                 example: "00:00:00"
 *               info:
 *                 type: string
 *               event_type_id:
 *                 type: number
 *               human_category_id:
 *                 type: number
 *               venue_id:
 *                 type: number
 *               lang_id:
 *                 type: number
 *               release_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       '200':
 *         description: Event updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Event not found
 *       '500':
 *         description: Server error
 */

router.put("/events/:id", EventController.updateEvent);

/**
 * @swagger
 * /api/events/{id}:
 *   delete:
 *     summary: Delete Event by ID
 *     tags: [Event]
 *     description:  Eventni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Event ID
 *     responses:
 *       '200':
 *         description: Event deleted
 *       '404':
 *         description: Event not found
 *       '500':
 *         description: server error
 */
router.delete("/events/:id", EventController.deleteEvent);

module.exports = router;
