const express = require("express");
const router = express.Router();
const CartController = require("../controller/cart.controller");

/**
 * @swagger
 * tags:
 *  name: Cart
 *  description: Cart management
 */

/**
 * @swagger
 * /api/carts:
 *   post:
 *     tags: [Cart]
 *     summary: Create a new Cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: number
 *               createdAt:
 *                 type: string
 *                 format: date
 *               fineshed:
 *                 type: string
 *                 format: date
 *               status_id:
 *                 type: number
 *     responses:
 *       '201':
 *         description: Cart created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/carts", CartController.createCart);

/**
 * @swagger
 * /api/carts:
 *   get:
 *     tags: [Cart]
 *     summary: Get all Carts
 *     responses:
 *       '200':
 *         description: List of Carts
 *       '500':
 *         description: Server error
 */
router.get("/carts", CartController.getCarts);

/**
 * @swagger
 * /api/carts/{id}:
 *   get:
 *     tags: [Cart]
 *     summary: Get Cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Cart ID
 *     responses:
 *       '200':
 *         description: Cart details
 *       '404':
 *         description: Cart not found
 *       '500':
 *         description: Server error
 */
router.get("/carts/:id", CartController.getCartById);

/**
 * @swagger
 * /api/carts/{id}:
 *   put:
 *     tags: [Cart]
 *     summary: Update Cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: number
 *               createdAt:
 *                 type: string
 *                 format: date
 *               fineshed:
 *                 type: string
 *                 format: date
 *               status_id:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Cart updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Cart not found
 *       '500':
 *         description: Server error
 */

router.put("/carts/:id", CartController.updateCart);

/**
 * @swagger
 * /api/carts/{id}:
 *   delete:
 *     summary: Delete Cart by ID
 *     tags: [Cart]
 *     description:  Cartni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Cart ID
 *     responses:
 *       '200':
 *         description: Cart deleted
 *       '404':
 *         description: Cart not found
 *       '500':
 *         description: server error
 */
router.delete("/carts/:id", CartController.deleteCart);

module.exports = router;
