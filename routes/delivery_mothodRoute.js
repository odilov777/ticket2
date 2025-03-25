const express = require("express");
const router = express.Router();
const Delivery_methodController = require("../controller/delivery_method.controller");

/**
 * @swagger
 * tags:
 *  name: Delivery_method
 *  description: Delivery_method management
 */

/**
 * @swagger
 * /api/delivery_methods:
 *   post:
 *     tags: [Delivery_method]
 *     summary: Create a new Delivery_method
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
 *         description: Delivery_method created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/delivery_methods", Delivery_methodController.createDelivery_method);

/**
 * @swagger
 * /api/delivery_methods:
 *   get:
 *     tags: [Delivery_method]
 *     summary: Get all Delivery_methods
 *     responses:
 *       '200':
 *         description: List of Delivery_methods
 *       '500':
 *         description: Server error
 */
router.get("/delivery_methods", Delivery_methodController.getDelivery_methods);

/**
 * @swagger
 * /api/delivery_methods/{id}:
 *   get:
 *     tags: [Delivery_method]
 *     summary: Get Delivery_method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Delivery_method ID
 *     responses:
 *       '200':
 *         description: Delivery_method details
 *       '404':
 *         description: Delivery_method not found
 *       '500':
 *         description: Server error
 */
router.get("/delivery_methods/:id", Delivery_methodController.getDelivery_methodById);

/**
 * @swagger
 * /api/delivery_methods/{id}:
 *   put:
 *     tags: [Delivery_method]
 *     summary: Update Delivery_method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Delivery_method ID
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
 *         description: Delivery_method updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Delivery_method not found
 *       '500':
 *         description: Server error
 */

router.put("/delivery_methods/:id", Delivery_methodController.updateDelivery_method);

/**
 * @swagger
 * /api/delivery_methods/{id}:
 *   delete:
 *     summary: Delete Delivery_method by ID
 *     tags: [Delivery_method]
 *     description:  Delivery_methodni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Delivery_method ID
 *     responses:
 *       '200':
 *         description: Delivery_method deleted
 *       '404':
 *         description: Delivery_method not found
 *       '500':
 *         description: server error
 */
router.delete("/delivery_methods/:id", Delivery_methodController.deleteDelivery_method);

module.exports = router;
