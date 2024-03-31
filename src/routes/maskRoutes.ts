import express from 'express';
import maskController from '../controllers/maskController';

const router = express.Router();

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
 *           example: "Masque N95"
 *           description: The name of the mask.
 *         description:
 *           type: string
 *           example: "A highly efficient mask for filtering particles."
 *           description: A description of the mask.
 *         maskJson:
 *           type: object
 *           additionalProperties: true
 *           example: {"type": "N95", "filterEfficiency": "95%"}
 *           description: A JSON detailing specific features of the mask.
 *     Error:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Description of the error
 *           example: "Invalid request data"
 *   parameters:
 *     maskId:
 *       in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: integer
 *         description: The ID of the mask.
 *
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
 * /masks/{id}:
 *   get:
 *     summary: Returns a mask by its ID
 *     tags: [Masks]
 *     parameters:
 *       - $ref: '#/components/parameters/maskId'
 *     responses:
 *       200:
 *         description: A specific mask
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Mask'
 *       404:
 *         description: Mask not found
 *   put:
 *     summary: Updates a mask by its ID
 *     tags: [Masks]
 *     parameters:
 *       - $ref: '#/components/parameters/maskId'
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
 *   delete:
 *     summary: Deletes a mask by its ID
 *     tags: [Masks]
 *     parameters:
 *       - $ref: '#/components/parameters/maskId'
 *     responses:
 *       204:
 *         description: The mask has been deleted
 *       404:
 *         description: Mask not found
 */

router.get('/', maskController.getAllMasks);
router.post('/', maskController.createMask);
router.get('/:id', maskController.getMaskById);
router.put('/:id', maskController.updateMask);
router.delete('/:id', maskController.deleteMask);

export default router;
