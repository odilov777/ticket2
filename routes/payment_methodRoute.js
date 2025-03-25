const express = require("express");
const router = express.Router();
const Payment_methodController = require("../controller/payment_method.controller");

/**
 * @swagger
 * tags:
 *  name: Payment_method
 *  description: Payment_method management
 */

/**
 * @swagger
 * /api/payment_methods:
 *   post:
 *     tags: [Payment_method]
 *     summary: Create a new Payment_method
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
 *         description: Payment_method created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/payment_methods", Payment_methodController.createPayment_method);

/**
 * @swagger
 * /api/payment_methods:
 *   get:
 *     tags: [Payment_method]
 *     summary: Get all Payment_methods
 *     responses:
 *       '200':
 *         description: List of Payment_methods
 *       '500':
 *         description: Server error
 */
router.get("/payment_methods", Payment_methodController.getPayment_methods);

/**
 * @swagger
 * /api/payment_methods/{id}:
 *   get:
 *     tags: [Payment_method]
 *     summary: Get Payment_method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Payment_method ID
 *     responses:
 *       '200':
 *         description: Payment_method details
 *       '404':
 *         description: Payment_method not found
 *       '500':
 *         description: Server error
 */
router.get("/payment_methods/:id", Payment_methodController.getPayment_methodById);

/**
 * @swagger
 * /api/payment_methods/{id}:
 *   put:
 *     tags: [Payment_method]
 *     summary: Update Payment_method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Payment_method ID
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
 *         description: Payment_method updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Payment_method not found
 *       '500':
 *         description: Server error
 */

router.put("/payment_methods/:id", Payment_methodController.updatePayment_method);

/**
 * @swagger
 * /api/payment_methods/{id}:
 *   delete:
 *     summary: Delete Payment_method by ID
 *     tags: [Payment_method]
 *     description:  Payment_methodni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Payment_method ID
 *     responses:
 *       '200':
 *         description: Payment_method deleted
 *       '404':
 *         description: Payment_method not found
 *       '500':
 *         description: server error
 */
router.delete("/payment_methods/:id", Payment_methodController.deletePayment_method);

module.exports = router;
