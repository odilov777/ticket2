const express = require("express");
const router = express.Router();
const Venue_venuetypeController = require("../controller/venue_venuetype.controller");

/**
 * @swagger
 * tags:
 *  name: Venue_venuetype
 *  description: Venue_venuetype management
 */

/**
 * @swagger
 * /api/venue_venuetypes:
 *   post:
 *     tags: [Venue_venuetype]
 *     summary: Create a new Venue_venuetype
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: number
 *               venue_type_id:
 *                 type: number
 *     responses:
 *       '201':
 *         description: Venue_venuetype created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/venue_venuetypes", Venue_venuetypeController.createVenue_venuetype);

/**
 * @swagger
 * /api/venue_venuetypes:
 *   get:
 *     tags: [Venue_venuetype]
 *     summary: Get all Venue_venuetypes
 *     responses:
 *       '200':
 *         description: List of Venue_venuetypes
 *       '500':
 *         description: Server error
 */
router.get("/venue_venuetypes", Venue_venuetypeController.getVenue_venuetypes);

/**
 * @swagger
 * /api/venue_venuetypes/{id}:
 *   get:
 *     tags: [Venue_venuetype]
 *     summary: Get Venue_venuetype by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Venue_venuetype ID
 *     responses:
 *       '200':
 *         description: Venue_venuetype details
 *       '404':
 *         description: Venue_venuetype not found
 *       '500':
 *         description: Server error
 */
router.get("/venue_venuetypes/:id", Venue_venuetypeController.getVenue_venuetypeById);

/**
 * @swagger
 * /api/venue_venuetypes/{id}:
 *   put:
 *     tags: [Venue_venuetype]
 *     summary: Update Venue_venuetype by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue_venuetype ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: number
 *               venue_type_id:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Venue_venuetype updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Venue_venuetype not found
 *       '500':
 *         description: Server error
 */

router.put("/venue_venuetypes/:id", Venue_venuetypeController.updateVenue_venuetype);

/**
 * @swagger
 * /api/venue_venuetypes/{id}:
 *   delete:
 *     summary: Delete Venue_venuetype by ID
 *     tags: [Venue_venuetype]
 *     description:  Venue_venuetypeni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Venue_venuetype ID
 *     responses:
 *       '200':
 *         description: Venue_venuetype deleted
 *       '404':
 *         description: Venue_venuetype not found
 *       '500':
 *         description: server error
 */
router.delete("/venue_venuetypes/:id", Venue_venuetypeController.deleteVenue_venuetype);

module.exports = router;
