const express = require("express");
const router = express.Router();
const Customer_cardController = require("../controller/customer_card.controller");

/**
 * @swagger
 * tags:
 *  name: Customer_card
 *  description: Customer_card management
 */

/**
 * @swagger
 * /api/customer_cards:
 *   post:
 *     tags: [Customer_card]
 *     summary: Create a new Customer_card
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: number
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: string
 *               month:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_main:
 *                 type: boolean
 *     responses:
 *       '201':
 *         description: Customer_card created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/customer_cards", Customer_cardController.createCustomer_card);

/**
 * @swagger
 * /api/customer_cards:
 *   get:
 *     tags: [Customer_card]
 *     summary: Get all Customer_cards
 *     responses:
 *       '200':
 *         description: List of Customer_cards
 *       '500':
 *         description: Server error
 */
router.get("/customer_cards", Customer_cardController.getCustomer_cards);

/**
 * @swagger
 * /api/customer_cards/{id}:
 *   get:
 *     tags: [Customer_card]
 *     summary: Get Customer_card by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Customer_card ID
 *     responses:
 *       '200':
 *         description: Customer_card details
 *       '404':
 *         description: Customer_card not found
 *       '500':
 *         description: Server error
 */
router.get("/customer_cards/:id", Customer_cardController.getCustomer_cardById);

/**
 * @swagger
 * /api/customer_cards/{id}:
 *   put:
 *     tags: [Customer_card]
 *     summary: Update Customer_card by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer_card ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: number
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: string
 *               month:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_main:
 *                 type: boolean
 *     responses:
 *       '200':
 *         description: Customer_card updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Customer_card not found
 *       '500':
 *         description: Server error
 */

router.put("/customer_cards/:id", Customer_cardController.updateCustomer_card);

/**
 * @swagger
 * /api/customer_cards/{id}:
 *   delete:
 *     summary: Delete Customer_card by ID
 *     tags: [Customer_card]
 *     description:  Customer_cardni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Customer_card ID
 *     responses:
 *       '200':
 *         description: Customer_card deleted
 *       '404':
 *         description: Customer_card not found
 *       '500':
 *         description: server error
 */
router.delete("/customer_cards/:id", Customer_cardController.deleteCustomer_card);

module.exports = router;
