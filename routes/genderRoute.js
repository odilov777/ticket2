const express = require("express");
const router = express.Router();
const GenderController = require("../controller/gender.controller");

/**
 * @swagger
 * tags:
 *  name: Gender
 *  description: Gender management
 */

/**
 * @swagger
 * /api/genders:
 *   post:
 *     tags: [Gender]
 *     summary: Create a new Gender
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
 *         description: Gender created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/genders", GenderController.createGender);

/**
 * @swagger
 * /api/genders:
 *   get:
 *     tags: [Gender]
 *     summary: Get all Genders
 *     responses:
 *       '200':
 *         description: List of Genders
 *       '500':
 *         description: Server error
 */
router.get("/genders", GenderController.getGenders);

/**
 * @swagger
 * /api/genders/{id}:
 *   get:
 *     tags: [Gender]
 *     summary: Get Gender by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Gender ID
 *     responses:
 *       '200':
 *         description: Gender details
 *       '404':
 *         description: Gender not found
 *       '500':
 *         description: Server error
 */
router.get("/genders/:id", GenderController.getGenderById);

/**
 * @swagger
 * /api/genders/{id}:
 *   put:
 *     tags: [Gender]
 *     summary: Update Gender by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Gender ID
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
 *         description: Gender updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Gender not found
 *       '500':
 *         description: Server error
 */

router.put("/genders/:id", GenderController.updateGender);

/**
 * @swagger
 * /api/genders/{id}:
 *   delete:
 *     summary: Delete Gender by ID
 *     tags: [Gender]
 *     description:  Genderni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Gender ID
 *     responses:
 *       '200':
 *         description: Gender deleted
 *       '404':
 *         description: Gender not found
 *       '500':
 *         description: server error
 */
router.delete("/genders/:id", GenderController.deleteGender);

module.exports = router;
