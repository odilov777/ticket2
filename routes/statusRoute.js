const express = require("express");
const router = express.Router();
const StatusController = require("../controller/status.controller");

/**
 * @swagger
 * tags:
 *  name: Status
 *  description: Status management
 */

/**
 * @swagger
 * /api/statuss:
 *   post:
 *     tags: [Status]
 *     summary: Create a new Status
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Status created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/statuss", StatusController.createStatus);

/**
 * @swagger
 * /api/statuss:
 *   get:
 *     tags: [Status]
 *     summary: Get all Statuss
 *     responses:
 *       '200':
 *         description: List of Statuss
 *       '500':
 *         description: Server error
 */
router.get("/statuss", StatusController.getStatuss);

/**
 * @swagger
 * /api/statuss/{id}:
 *   get:
 *     tags: [Status]
 *     summary: Get Status by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Status ID
 *     responses:
 *       '200':
 *         description: Status details
 *       '404':
 *         description: Status not found
 *       '500':
 *         description: Server error
 */
router.get("/statuss/:id", StatusController.getStatusById);

/**
 * @swagger
 * /api/statuss/{id}:
 *   put:
 *     tags: [Status]
 *     summary: Update Status by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Status ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Status updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Status not found
 *       '500':
 *         description: Server error
 */

router.put("/statuss/:id", StatusController.updateStatus);

/**
 * @swagger
 * /api/statuss/{id}:
 *   delete:
 *     summary: Delete Status by ID
 *     tags: [Status]
 *     description:  Statusni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Status ID
 *     responses:
 *       '200':
 *         description: Status deleted
 *       '404':
 *         description: Status not found
 *       '500':
 *         description: server error
 */
router.delete("/statuss/:id", StatusController.deleteStatus);

module.exports = router;
