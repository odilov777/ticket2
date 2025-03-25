const express = require("express");
const router = express.Router();
const SectorController = require("../controller/sector.controller");

/**
 * @swagger
 * tags:
 *  name: Sector
 *  description: Sector management
 */

/**
 * @swagger
 * /api/sectors:
 *   post:
 *     tags: [Sector]
 *     summary: Create a new Sector
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector_name:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Sector created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/sectors", SectorController.createSector);

/**
 * @swagger
 * /api/sectors:
 *   get:
 *     tags: [Sector]
 *     summary: Get all Sectors
 *     responses:
 *       '200':
 *         description: List of Sectors
 *       '500':
 *         description: Server error
 */
router.get("/sectors", SectorController.getSectors);

/**
 * @swagger
 * /api/sectors/{id}:
 *   get:
 *     tags: [Sector]
 *     summary: Get Sector by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Sector ID
 *     responses:
 *       '200':
 *         description: Sector details
 *       '404':
 *         description: Sector not found
 *       '500':
 *         description: Server error
 */
router.get("/sectors/:id", SectorController.getSectorById);

/**
 * @swagger
 * /api/sectors/{id}:
 *   put:
 *     tags: [Sector]
 *     summary: Update Sector by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Sector ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector_name:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Sector updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Sector not found
 *       '500':
 *         description: Server error
 */

router.put("/sectors/:id", SectorController.updateSector);

/**
 * @swagger
 * /api/sectors/{id}:
 *   delete:
 *     summary: Delete Sector by ID
 *     tags: [Sector]
 *     description:  Sectorni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Sector ID
 *     responses:
 *       '200':
 *         description: Sector deleted
 *       '404':
 *         description: Sector not found
 *       '500':
 *         description: server error
 */
router.delete("/sectors/:id", SectorController.deleteSector);

module.exports = router;
