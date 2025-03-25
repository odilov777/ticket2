const express = require("express");
const router = express.Router();
const Discount_couponController = require("../controller/discount_coupon.controller");

/**
 * @swagger
 * tags:
 *  name: Discount_coupon
 *  description: Discount_coupon management
 */

/**
 * @swagger
 * /api/discount_coupons:
 *   post:
 *     tags: [Discount_coupon]
 *     summary: Create a new Discount_coupon
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               discount:
 *                 type: number
 *               finish_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       '201':
 *         description: Discount_coupon created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/discount_coupons", Discount_couponController.createDiscount_coupon);

/**
 * @swagger
 * /api/discount_coupons:
 *   get:
 *     tags: [Discount_coupon]
 *     summary: Get all Discount_coupons
 *     responses:
 *       '200':
 *         description: List of Discount_coupons
 *       '500':
 *         description: Server error
 */
router.get("/discount_coupons", Discount_couponController.getDiscount_coupons);

/**
 * @swagger
 * /api/discount_coupons/{id}:
 *   get:
 *     tags: [Discount_coupon]
 *     summary: Get Discount_coupon by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Discount_coupon ID
 *     responses:
 *       '200':
 *         description: Discount_coupon details
 *       '404':
 *         description: Discount_coupon not found
 *       '500':
 *         description: Server error
 */
router.get("/discount_coupons/:id", Discount_couponController.getDiscount_couponById);

/**
 * @swagger
 * /api/discount_coupons/{id}:
 *   put:
 *     tags: [Discount_coupon]
 *     summary: Update Discount_coupon by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Discount_coupon ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               discount:
 *                 type: number
 *               finish_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       '200':
 *         description: Discount_coupon updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Discount_coupon not found
 *       '500':
 *         description: Server error
 */

router.put("/discount_coupons/:id", Discount_couponController.updateDiscount_coupon);

/**
 * @swagger
 * /api/discount_coupons/{id}:
 *   delete:
 *     summary: Delete Discount_coupon by ID
 *     tags: [Discount_coupon]
 *     description:  Discount_couponni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Discount_coupon ID
 *     responses:
 *       '200':
 *         description: Discount_coupon deleted
 *       '404':
 *         description: Discount_coupon not found
 *       '500':
 *         description: server error
 */
router.delete("/discount_coupons/:id", Discount_couponController.deleteDiscount_coupon);

module.exports = router;
