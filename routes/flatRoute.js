const express = require("express");
const router = express.Router();
const FlatController = require("../controller/flat.controller");

/**
 * @swagger
 * tags:
 *  name: Flat
 *  description: Flat management
 */

/**
 * @swagger
 * /api/flats:
 *   post:
 *     tags: [Flat]
 *     summary: Create a new Flat
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               etaj:
 *                 type: number
 *               condition:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Flat created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/flats", FlatController.createFlat);

/**
 * @swagger
 * /api/flats:
 *   get:
 *     tags: [Flat]
 *     summary: Get all Flats
 *     responses:
 *       '200':
 *         description: List of Flats
 *       '500':
 *         description: Server error
 */
router.get("/flats", FlatController.getFlats);

/**
 * @swagger
 * /api/flats/{id}:
 *   get:
 *     tags: [Flat]
 *     summary: Get Flat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Flat ID
 *     responses:
 *       '200':
 *         description: Flat details
 *       '404':
 *         description: Flat not found
 *       '500':
 *         description: Server error
 */
router.get("/flats/:id", FlatController.getFlatById);

/**
 * @swagger
 * /api/flats/{id}:
 *   put:
 *     tags: [Flat]
 *     summary: Update Flat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Flat ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               etaj:
 *                 type: number
 *               condition:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Flat updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Flat not found
 *       '500':
 *         description: Server error
 */

router.put("/flats/:id", FlatController.updateFlat);

/**
 * @swagger
 * /api/flats/{id}:
 *   delete:
 *     summary: Delete Flat by ID
 *     tags: [Flat]
 *     description:  Flatni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Flat ID
 *     responses:
 *       '200':
 *         description: Flat deleted
 *       '404':
 *         description: Flat not found
 *       '500':
 *         description: server error
 */
router.delete("/flats/:id", FlatController.deleteFlat);

module.exports = router;
