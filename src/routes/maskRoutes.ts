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
 *         - type
 *         - rating
 *       properties:
 *         name:
 *           type: string
 *           example: "Masque N95"
 *           description: Le nom du masque.
 *         description:
 *           type: string
 *           example: "Un masque très efficace pour filtrer les particules."
 *           description: Une description du masque.
 *         type:
 *           type: string
 *           example: "N95"
 *           description: Le type du masque.
 *         rating:
 *           type: integer
 *           example: 95
 *           description: L'efficacité du masque en pourcentage.
 *     Error:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Une description de l'erreur.
 *           example: "Données de requête invalides"
 *   parameters:
 *     maskId:
 *       in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: integer
 *         description: L'ID du masque.
 *
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
 *   post:
 *     summary: Crée un nouveau masque
 *     tags: [Masks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Mask'
 *     responses:
 *       201:
 *         description: Le masque a été créé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Mask'
 *       400:
 *         description: Données de requête invalides
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *
 * /masks/{id}:
 *   get:
 *     summary: Retourne un masque par son ID
 *     tags: [Masks]
 *     parameters:
 *       - $ref: '#/components/parameters/maskId'
 *     responses:
 *       200:
 *         description: Un masque spécifique
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Mask'
 *       404:
 *         description: Masque non trouvé
 *   put:
 *     summary: Met à jour un masque par son ID
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
 *         description: Le masque a été mis à jour
 *       404:
 *         description: Masque non trouvé
 *   delete:
 *     summary: Supprime un masque par son ID
 *     tags: [Masks]
 *     parameters:
 *       - $ref: '#/components/parameters/maskId'
 *     responses:
 *       204:
 *         description: Le masque a été supprimé
 *       404:
 *         description: Masque non trouvé
 */

router.get('/', maskController.getAllMasks);
router.post('/', maskController.createMask);
router.get('/:id', maskController.getMaskById);
router.put('/:id', maskController.updateMask);
router.delete('/:id', maskController.deleteMask);

export default router;
