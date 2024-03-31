"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const maskController_1 = __importDefault(require("../controllers/maskController"));
const router = express_1.default.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Mask:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - maskJson
 *       properties:
 *         id:
 *           type: integer
 *           description: The unique identifier for the mask.
 *         name:
 *           type: string
 *           description: The name of the mask.
 *         description:
 *           type: string
 *           description: A description of the mask.
 *         maskJson:
 *           type: object
 *           description: A JSON detailing specific features of the mask.
 *     Error:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: A description of the error.
 */
/**
 * @swagger
 * tags:
 *   name: Masks
 *   description: The masks managing API
 */
/**
 * @swagger
 * /masks:
 *   get:
 *     summary: Returns a list of all masks
 *     tags: [Masks]
 *     responses:
 *       200:
 *         description: A list of masks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Mask'
 */
router.get('/', maskController_1.default.getAllMasks);
/**
 * @swagger
 * /masks:
 *   post:
 *     summary: Creates a new mask
 *     tags: [Masks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Mask'
 *     responses:
 *       201:
 *         description: The mask has been created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Mask'
 *       400:
 *         description: Invalid request data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/', maskController_1.default.createMask);
/**
 * @swagger
 * /masks/{id}:
 *   get:
 *     summary: Returns a mask by its ID
 *     tags: [Masks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the mask
 *     responses:
 *       200:
 *         description: A specific mask
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Mask'
 *       404:
 *         description: Mask not found
 */
router.get('/:id', maskController_1.default.getMaskById);
/**
 * @swagger
 * /masks/{id}:
 *   put:
 *     summary: Updates a mask by its ID
 *     tags: [Masks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Mask'
 *     responses:
 *       200:
 *         description: The mask has been updated
 *       404:
 *         description: Mask not found
 */
router.put('/:id', maskController_1.default.updateMask);
/**
 * @swagger
 * /masks/{id}:
 *   delete:
 *     summary: Deletes a mask by its ID
 *     tags: [Masks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: The mask has been deleted
 *       404:
 *         description: Mask not found
 */
router.delete('/:id', maskController_1.default.deleteMask);
exports.default = router;
