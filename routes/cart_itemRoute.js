const express = require("express");
const router = express.Router();
const Cart_itemController = require("../controller/cart_item.controller");

/**
 * @swagger
 * tags:
 *  name: Cart_item
 *  description: Cart_item management
 */

/**
 * @swagger
 * /api/cart_items:
 *   post:
 *     tags: [Cart_item]
 *     summary: Create a new Cart_item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: number
 *               cart_id:
 *                 type: number
 *               quantity:
 *                 type: number
 *     responses:
 *       '201':
 *         description: Cart_item created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/cart_items", Cart_itemController.createCart_item);

/**
 * @swagger
 * /api/cart_items:
 *   get:
 *     tags: [Cart_item]
 *     summary: Get all Cart_items
 *     responses:
 *       '200':
 *         description: List of Cart_items
 *       '500':
 *         description: Server error
 */
router.get("/cart_items", Cart_itemController.getCart_items);

/**
 * @swagger
 * /api/cart_items/{id}:
 *   get:
 *     tags: [Cart_item]
 *     summary: Get Cart_item by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Cart_item ID
 *     responses:
 *       '200':
 *         description: Cart_item details
 *       '404':
 *         description: Cart_item not found
 *       '500':
 *         description: Server error
 */
router.get("/cart_items/:id", Cart_itemController.getCart_itemById);

/**
 * @swagger
 * /api/cart_items/{id}:
 *   put:
 *     tags: [Cart_item]
 *     summary: Update Cart_item by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart_item ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: number
 *               cart_id:
 *                 type: number
 *               quantity:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Cart_item updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Cart_item not found
 *       '500':
 *         description: Server error
 */

router.put("/cart_items/:id", Cart_itemController.updateCart_item);

/**
 * @swagger
 * /api/cart_items/{id}:
 *   delete:
 *     summary: Delete Cart_item by ID
 *     tags: [Cart_item]
 *     description:  Cart_itemni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Cart_item ID
 *     responses:
 *       '200':
 *         description: Cart_item deleted
 *       '404':
 *         description: Cart_item not found
 *       '500':
 *         description: server error
 */
router.delete("/cart_items/:id", Cart_itemController.deleteCart_item);

module.exports = router;
