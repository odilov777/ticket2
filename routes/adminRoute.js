const express = require("express");
const router = express.Router();
const AdminController = require("../controller/admin.controller");

/**
 * @swagger
 * tags:
 *  name: Admin
 *  description: Admin management
 */

/**
 * @swagger
 * /api/admins:
 *   post:
 *     tags: [Admin]
 *     summary: Create a new Admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_creator:
 *                 type: boolean
 *               hashed_refresh_token:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Admin created
 *       '400':
 *         description: invalid input
 *       '500':
 *         description: server error
 */

router.post("/admins", AdminController.createAdmin);

/**
 * @swagger
 * /api/admins:
 *   get:
 *     tags: [Admin]
 *     summary: Get all Admins
 *     responses:
 *       '200':
 *         description: List of Admins
 *       '500':
 *         description: Server error
 */
router.get("/admins", AdminController.getAdmins);

/**
 * @swagger
 * /api/admins/{id}:
 *   get:
 *     tags: [Admin]
 *     summary: Get Admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Admin ID
 *     responses:
 *       '200':
 *         description: Admin details
 *       '404':
 *         description: Admin not found
 *       '500':
 *         description: Server error
 */
router.get("/admins/:id", AdminController.getAdminById);

/**
 * @swagger
 * /api/admins/{id}:
 *   put:
 *     tags: [Admin]
 *     summary: Update Admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_creator:
 *                 type: boolean
 *               hashed_refresh_token:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Admin updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Admin not found
 *       '500':
 *         description: Server error
 */

router.put("/admins/:id", AdminController.updateAdmin);

/**
 * @swagger
 * /api/admins/{id}:
 *   delete:
 *     summary: Delete Admin by ID
 *     tags: [Admin]
 *     description:  Adminni ID boyicha o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *             type: integer
 *         required: true
 *         description: Admin ID
 *     responses:
 *       '200':
 *         description: Admin deleted
 *       '404':
 *         description: Admin not found
 *       '500':
 *         description: server error
 */
router.delete("/admins/:id", AdminController.deleteAdmin);

module.exports = router;
