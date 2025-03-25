const express = require("express");
const router = express.Router();
const LangController = require("../controller/lang.controller");

/**
 * @swagger
 * tags:
 *  name: Lang
 *  description: Lang management
 */

/**
 * @swagger
 * /api/langs:
 *   post:
 *     tags: [Lang]
 *     summary: Create a new Lang
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
 *         description: Lang created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/langs", LangController.createLang);

/**
 * @swagger
 * /api/langs:
 *   get:
 *     tags: [Lang]
 *     summary: Get all Langs
 *     responses:
 *       '200':
 *         description: List of Langs
 *       '500':
 *         description: Server error
 */
router.get("/langs", LangController.getLangs);

/**
 * @swagger
 * /api/langs/{id}:
 *   get:
 *     tags: [Lang]
 *     summary: Get Lang by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Lang ID
 *     responses:
 *       '200':
 *         description: Lang details
 *       '404':
 *         description: Lang not found
 *       '500':
 *         description: Server error
 */
router.get("/langs/:id", LangController.getLangById);

/**
 * @swagger
 * /api/langs/{id}:
 *   put:
 *     tags: [Lang]
 *     summary: Update Lang by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Lang ID
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
 *         description: Lang updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Lang not found
 *       '500':
 *         description: Server error
 */

router.put("/langs/:id", LangController.updateLang);

/**
 * @swagger
 * /api/langs/{id}:
 *   delete:
 *     summary: Delete Lang by ID
 *     tags: [Lang]
 *     description:  Langni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Lang ID
 *     responses:
 *       '200':
 *         description: Lang deleted
 *       '404':
 *         description: Lang not found
 *       '500':
 *         description: server error
 */
router.delete("/langs/:id", LangController.deleteLang);

module.exports = router;
