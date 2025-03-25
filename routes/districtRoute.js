const express = require("express");
const router = express.Router();
const DistrictController = require("../controller/district.controller");

/**
 * @swagger
 * tags:
 *  name: District
 *  description: District management
 */

/**
 * @swagger
 * /api/districts:
 *   post:
 *     tags: [District]
 *     summary: Create a new District
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               region_id:
 *                 type: number
 *     responses:
 *       '201':
 *         description: District created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/districts", DistrictController.createDistrict);

/**
 * @swagger
 * /api/districts:
 *   get:
 *     tags: [District]
 *     summary: Get all Districts
 *     responses:
 *       '200':
 *         description: List of Districts
 *       '500':
 *         description: Server error
 */
router.get("/districts", DistrictController.getDistricts);

/**
 * @swagger
 * /api/districts/{id}:
 *   get:
 *     tags: [District]
 *     summary: Get District by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: District ID
 *     responses:
 *       '200':
 *         description: District details
 *       '404':
 *         description: District not found
 *       '500':
 *         description: Server error
 */
router.get("/districts/:id", DistrictController.getDistrictById);

/**
 * @swagger
 * /api/districts/{id}:
 *   put:
 *     tags: [District]
 *     summary: Update District by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: District ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               region_id:
 *                 type: number
 *     responses:
 *       '200':
 *         description: District updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: District not found
 *       '500':
 *         description: Server error
 */

router.put("/districts/:id", DistrictController.updateDistrict);

/**
 * @swagger
 * /api/districts/{id}:
 *   delete:
 *     summary: Delete District by ID
 *     tags: [District]
 *     description:  Districtni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: District ID
 *     responses:
 *       '200':
 *         description: District deleted
 *       '404':
 *         description: District not found
 *       '500':
 *         description: server error
 */
router.delete("/districts/:id", DistrictController.deleteDistrict);

module.exports = router;
