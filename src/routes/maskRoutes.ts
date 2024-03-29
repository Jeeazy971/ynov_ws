import express from 'express';
import {
    getAllMasks,
    getMaskById,
    createMask,
    updateMask,
    deleteMask,
} from '../controllers/maskController';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Masks
 *   description: Opérations sur les masques
 */

/**
 * @swagger
 * /masks:
 *   get:
 *     summary: Retourne une liste de tous les masques
 *     tags: [Masks]
 *     responses:
 *       200:
 *         description: Une liste de masques
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Mask'
 */
router.get('/', getAllMasks);

/**
 * @swagger
 * /masks/{id}:
 *   get:
 *     summary: Retourne un masque par son ID
 *     tags: [Masks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Un masque spécifique
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Mask'
 *       404:
 *         description: Masque non trouvé
 */
router.get('/:id', getMaskById);

/**
 * @swagger
 * /masks:
 *   post:
 *     summary: Crée un nouveau masque
 *     tags: [Masks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - maskJson
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Masque N95"
 *               description:
 *                 type: string
 *                 example: "Un masque très efficace pour filtrer les particules."
 *               maskJson:
 *                 type: object
 *                 example: {"type": "N95", "filterEfficiency": "95%"}
 *     responses:
 *       201:
 *         description: Le masque a été créé
 *       400:
 *         description: Données de requête invalides
 */
router.post('/', createMask);

/**
 * @swagger
 * /masks/{id}:
 *   put:
 *     summary: Met à jour un masque par son ID
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
 *         description: Masque mis à jour avec succès
 *       404:
 *         description: Masque non trouvé
 */
router.put('/:id', updateMask);

/**
 * @swagger
 * /masks/{id}:
 *   delete:
 *     summary: Supprime un masque par son ID
 *     tags: [Masks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Masque supprimé avec succès
 *       404:
 *         description: Masque non trouvé
 */
router.delete('/:id', deleteMask);

export default router;
