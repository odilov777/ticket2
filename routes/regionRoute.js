const express = require("express");
const router = express.Router();
const RegionController = require("../controller/region.controller");

/**
 * @swagger
 * tags:
 *  name: Region
 *  description: Region management
 */

/**
 * @swagger
 * /api/regions:
 *   post:
 *     tags: [Region]
 *     summary: Create a new Region
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
 *         description: Region created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/regions", RegionController.createRegion);

/**
 * @swagger
 * /api/regions:
 *   get:
 *     tags: [Region]
 *     summary: Get all Regions
 *     responses:
 *       '200':
 *         description: List of Regions
 *       '500':
 *         description: Server error
 */
router.get("/regions", RegionController.getRegions);

/**
 * @swagger
 * /api/regions/{id}:
 *   get:
 *     tags: [Region]
 *     summary: Get Region by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Region ID
 *     responses:
 *       '200':
 *         description: Region details
 *       '404':
 *         description: Region not found
 *       '500':
 *         description: Server error
 */
router.get("/regions/:id", RegionController.getRegionById);

/**
 * @swagger
 * /api/regions/{id}:
 *   put:
 *     tags: [Region]
 *     summary: Update Region by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Region ID
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
 *         description: Region updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Region not found
 *       '500':
 *         description: Server error
 */

router.put("/regions/:id", RegionController.updateRegion);

/**
 * @swagger
 * /api/regions/{id}:
 *   delete:
 *     summary: Delete Region by ID
 *     tags: [Region]
 *     description:  Regionni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Region ID
 *     responses:
 *       '200':
 *         description: Region deleted
 *       '404':
 *         description: Region not found
 *       '500':
 *         description: server error
 */
router.delete("/regions/:id", RegionController.deleteRegion);

module.exports = router;
