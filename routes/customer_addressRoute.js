const express = require("express");
const router = express.Router();
const Customer_addressController = require("../controller/customer_address.controller");

/**
 * @swagger
 * tags:
 *  name: Customer_address
 *  description: Customer_address management
 */

/**
 * @swagger
 * /api/customer_addresss:
 *   post:
 *     tags: [Customer_address]
 *     summary: Create a new Customer_address
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
 *               country_id:
 *                 type: number
 *               region_id:
 *                 type: number
 *               district_id:
 *                 type: number
 *               street:
 *                 type: string
 *               house:
 *                 type: string
 *               flat_id:
 *                 type: number
 *               location:
 *                 type: string
 *               post_index:
 *                 type: string
 *               info:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Customer_address created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/customer_addresss", Customer_addressController.createCustomer_address);

/**
 * @swagger
 * /api/customer_addresss:
 *   get:
 *     tags: [Customer_address]
 *     summary: Get all Customer_addresss
 *     responses:
 *       '200':
 *         description: List of Customer_addresss
 *       '500':
 *         description: Server error
 */
router.get("/customer_addresss", Customer_addressController.getCustomer_addresss);

/**
 * @swagger
 * /api/customer_addresss/{id}:
 *   get:
 *     tags: [Customer_address]
 *     summary: Get Customer_address by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Customer_address ID
 *     responses:
 *       '200':
 *         description: Customer_address details
 *       '404':
 *         description: Customer_address not found
 *       '500':
 *         description: Server error
 */
router.get("/customer_addresss/:id", Customer_addressController.getCustomer_addressById);

/**
 * @swagger
 * /api/customer_addresss/{id}:
 *   put:
 *     tags: [Customer_address]
 *     summary: Update Customer_address by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer_address ID
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
 *               country_id:
 *                 type: number
 *               region_id:
 *                 type: number
 *               district_id:
 *                 type: number
 *               street:
 *                 type: string
 *               house:
 *                 type: string
 *               flat_id:
 *                 type: number
 *               location:
 *                 type: string
 *               post_index:
 *                 type: string
 *               info:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Customer_address updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Customer_address not found
 *       '500':
 *         description: Server error
 */

router.put("/customer_addresss/:id", Customer_addressController.updateCustomer_address);

/**
 * @swagger
 * /api/customer_addresss/{id}:
 *   delete:
 *     summary: Delete Customer_address by ID
 *     tags: [Customer_address]
 *     description:  Customer_addressni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Customer_address ID
 *     responses:
 *       '200':
 *         description: Customer_address deleted
 *       '404':
 *         description: Customer_address not found
 *       '500':
 *         description: server error
 */
router.delete("/customer_addresss/:id", Customer_addressController.deleteCustomer_address);

module.exports = router;
