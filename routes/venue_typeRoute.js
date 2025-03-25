const express = require("express");
const router = express.Router();
const Venue_typeController = require("../controller/venue_type.controller");

/**
 * @swagger
 * tags:
 *  name: Venue_type
 *  description: Venue_type management
 */

/**
 * @swagger
 * /api/venue_types:
 *   post:
 *     tags: [Venue_type]
 *     summary: Create a new Venue_type
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
 *         description: Venue_type created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/venue_types", Venue_typeController.createVenue_type);

/**
 * @swagger
 * /api/venue_types:
 *   get:
 *     tags: [Venue_type]
 *     summary: Get all Venue_types
 *     responses:
 *       '200':
 *         description: List of Venue_types
 *       '500':
 *         description: Server error
 */
router.get("/venue_types", Venue_typeController.getVenue_types);

/**
 * @swagger
 * /api/venue_types/{id}:
 *   get:
 *     tags: [Venue_type]
 *     summary: Get Venue_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Venue_type ID
 *     responses:
 *       '200':
 *         description: Venue_type details
 *       '404':
 *         description: Venue_type not found
 *       '500':
 *         description: Server error
 */
router.get("/venue_types/:id", Venue_typeController.getVenue_typeById);

/**
 * @swagger
 * /api/venue_types/{id}:
 *   put:
 *     tags: [Venue_type]
 *     summary: Update Venue_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue_type ID
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
 *         description: Venue_type updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Venue_type not found
 *       '500':
 *         description: Server error
 */

router.put("/venue_types/:id", Venue_typeController.updateVenue_type);

/**
 * @swagger
 * /api/venue_types/{id}:
 *   delete:
 *     summary: Delete Venue_type by ID
 *     tags: [Venue_type]
 *     description:  Venue_typeni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Venue_type ID
 *     responses:
 *       '200':
 *         description: Venue_type deleted
 *       '404':
 *         description: Venue_type not found
 *       '500':
 *         description: server error
 */
router.delete("/venue_types/:id", Venue_typeController.deleteVenue_type);

module.exports = router;
