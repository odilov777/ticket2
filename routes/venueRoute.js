const express = require("express");
const router = express.Router();
const VenueController = require("../controller/venue.controller");

/**
 * @swagger
 * tags:
 *  name: Venue
 *  description: Venue management
 */

/**
 * @swagger
 * /api/venues:
 *   post:
 *     tags: [Venue]
 *     summary: Create a new Venue
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               schema:
 *                 type: string
 *               region_id:
 *                 type: number
 *               district_id:
 *                 type: number
 *     responses:
 *       '201':
 *         description: Venue created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/venues", VenueController.createVenue);

/**
 * @swagger
 * /api/venues:
 *   get:
 *     tags: [Venue]
 *     summary: Get all Venues
 *     responses:
 *       '200':
 *         description: List of Venues
 *       '500':
 *         description: Server error
 */
router.get("/venues", VenueController.getVenues);

/**
 * @swagger
 * /api/venues/{id}:
 *   get:
 *     tags: [Venue]
 *     summary: Get Venue by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Venue ID
 *     responses:
 *       '200':
 *         description: Venue details
 *       '404':
 *         description: Venue not found
 *       '500':
 *         description: Server error
 */
router.get("/venues/:id", VenueController.getVenueById);

/**
 * @swagger
 * /api/venues/{id}:
 *   put:
 *     tags: [Venue]
 *     summary: Update Venue by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               schema:
 *                 type: string
 *               region_id:
 *                 type: number
 *               district_id:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Venue updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Venue not found
 *       '500':
 *         description: Server error
 */

router.put("/venues/:id", VenueController.updateVenue);

/**
 * @swagger
 * /api/venues/{id}:
 *   delete:
 *     summary: Delete Venue by ID
 *     tags: [Venue]
 *     description:  Venueni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Venue ID
 *     responses:
 *       '200':
 *         description: Venue deleted
 *       '404':
 *         description: Venue not found
 *       '500':
 *         description: server error
 */
router.delete("/venues/:id", VenueController.deleteVenue);

module.exports = router;
