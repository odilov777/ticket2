const express = require("express");
const router = express.Router();
const Venue_photoController = require("../controller/venue_photo.controller");

/**
 * @swagger
 * tags:
 *  name: Venue_photo
 *  description: Venue_photo management
 */

/**
 * @swagger
 * /api/venue_photos:
 *   post:
 *     tags: [Venue_photo]
 *     summary: Create a new Venue_photo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: number
 *               url:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Venue_photo created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/venue_photos", Venue_photoController.createVenue_photo);

/**
 * @swagger
 * /api/venue_photos:
 *   get:
 *     tags: [Venue_photo]
 *     summary: Get all Venue_photos
 *     responses:
 *       '200':
 *         description: List of Venue_photos
 *       '500':
 *         description: Server error
 */
router.get("/venue_photos", Venue_photoController.getVenue_photos);

/**
 * @swagger
 * /api/venue_photos/{id}:
 *   get:
 *     tags: [Venue_photo]
 *     summary: Get Venue_photo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Venue_photo ID
 *     responses:
 *       '200':
 *         description: Venue_photo details
 *       '404':
 *         description: Venue_photo not found
 *       '500':
 *         description: Server error
 */
router.get("/venue_photos/:id", Venue_photoController.getVenue_photoById);

/**
 * @swagger
 * /api/venue_photos/{id}:
 *   put:
 *     tags: [Venue_photo]
 *     summary: Update Venue_photo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue_photo ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: number
 *               url:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Venue_photo updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Venue_photo not found
 *       '500':
 *         description: Server error
 */

router.put("/venue_photos/:id", Venue_photoController.updateVenue_photo);

/**
 * @swagger
 * /api/venue_photos/{id}:
 *   delete:
 *     summary: Delete Venue_photo by ID
 *     tags: [Venue_photo]
 *     description:  Venue_photoni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Venue_photo ID
 *     responses:
 *       '200':
 *         description: Venue_photo deleted
 *       '404':
 *         description: Venue_photo not found
 *       '500':
 *         description: server error
 */
router.delete("/venue_photos/:id", Venue_photoController.deleteVenue_photo);

module.exports = router;
