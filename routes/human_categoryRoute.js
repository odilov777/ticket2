const express = require("express");
const router = express.Router();
const Human_categoryController = require("../controller/human_category.controller");

/**
 * @swagger
 * tags:
 *  name: Human_category
 *  description: Human_category management
 */

/**
 * @swagger
 * /api/human_categorys:
 *   post:
 *     tags: [Human_category]
 *     summary: Create a new Human_category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               start_age:
 *                 type: number
 *               finish_age:
 *                 type: number
 *               gender:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Human_category created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/human_categorys", Human_categoryController.createHuman_category);

/**
 * @swagger
 * /api/human_categorys:
 *   get:
 *     tags: [Human_category]
 *     summary: Get all Human_categorys
 *     responses:
 *       '200':
 *         description: List of Human_categorys
 *       '500':
 *         description: Server error
 */
router.get("/human_categorys", Human_categoryController.getHuman_categorys);

/**
 * @swagger
 * /api/human_categorys/{id}:
 *   get:
 *     tags: [Human_category]
 *     summary: Get Human_category by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Human_category ID
 *     responses:
 *       '200':
 *         description: Human_category details
 *       '404':
 *         description: Human_category not found
 *       '500':
 *         description: Server error
 */
router.get("/human_categorys/:id", Human_categoryController.getHuman_categoryById);

/**
 * @swagger
 * /api/human_categorys/{id}:
 *   put:
 *     tags: [Human_category]
 *     summary: Update Human_category by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Human_category ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               start_age:
 *                 type: number
 *               finish_age:
 *                 type: number
 *               gender:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Human_category updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Human_category not found
 *       '500':
 *         description: Server error
 */

router.put("/human_categorys/:id", Human_categoryController.updateHuman_category);

/**
 * @swagger
 * /api/human_categorys/{id}:
 *   delete:
 *     summary: Delete Human_category by ID
 *     tags: [Human_category]
 *     description:  Human_categoryni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Human_category ID
 *     responses:
 *       '200':
 *         description: Human_category deleted
 *       '404':
 *         description: Human_category not found
 *       '500':
 *         description: server error
 */
router.delete("/human_categorys/:id", Human_categoryController.deleteHuman_category);

module.exports = router;
