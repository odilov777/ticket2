const express = require("express");
const router = express.Router();
const CountryController = require("../controller/country.controller");

/**
 * @swagger
 * tags:
 *  name: Country
 *  description: Country management
 */

/**
 * @swagger
 * /api/countrys:
 *   post:
 *     tags: [Country]
 *     summary: Create a new Country
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               country:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Country created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/countrys", CountryController.createCountry);

/**
 * @swagger
 * /api/countrys:
 *   get:
 *     tags: [Country]
 *     summary: Get all Countrys
 *     responses:
 *       '200':
 *         description: List of Countrys
 *       '500':
 *         description: Server error
 */
router.get("/countrys", CountryController.getCountrys);

/**
 * @swagger
 * /api/countrys/{id}:
 *   get:
 *     tags: [Country]
 *     summary: Get Country by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Country ID
 *     responses:
 *       '200':
 *         description: Country details
 *       '404':
 *         description: Country not found
 *       '500':
 *         description: Server error
 */
router.get("/countrys/:id", CountryController.getCountryById);

/**
 * @swagger
 * /api/countrys/{id}:
 *   put:
 *     tags: [Country]
 *     summary: Update Country by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Country ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               country:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Country updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Country not found
 *       '500':
 *         description: Server error
 */

router.put("/countrys/:id", CountryController.updateCountry);

/**
 * @swagger
 * /api/countrys/{id}:
 *   delete:
 *     summary: Delete Country by ID
 *     tags: [Country]
 *     description:  Countryni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Country ID
 *     responses:
 *       '200':
 *         description: Country deleted
 *       '404':
 *         description: Country not found
 *       '500':
 *         description: server error
 */
router.delete("/countrys/:id", CountryController.deleteCountry);

module.exports = router;
