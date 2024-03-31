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
 *           description: La description du masque.
 *         type:
 *           type: string
 *           example: "N95"
 *           description: Le type du masque.
 *         rating:
 *           type: integer
 *           example: 95
 *           description: L'efficacité du masque notée sur 100.
 *     Error:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Description de l'erreur.
 *           example: "Données de requête invalides"
 */

/**
 * @swagger
 * tags:
 *   name: Masks
 *   description: Gestion des masques
 */

/**
 * @swagger
 * /masks:
 *   get:
 *     summary: Renvoie la liste de tous les masques
 *     tags: [Masks]
 *     responses:
 *       200:
 *         description: Une liste des masques
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Mask'
 *       500:
 *         description: Erreur du serveur
 */

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
 *             $ref: '#/components/schemas/Mask'
 *     responses:
 *       201:
 *         description: Le masque a été créé avec succès
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
 */

/**
 * @swagger
 * /masks/{id}:
 *   get:
 *     summary: Renvoie un masque par son ID
 *     tags: [Masks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: L'ID du masque
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
 *         description: L'ID du masque à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Mask'
 *     responses:
 *       200:
 *         description: Le masque a été mis à jour avec succès
 *       404:
 *         description: Masque non trouvé
 */

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
 *         description: L'ID du masque à supprimer
 *     responses:
 *       204:
 *         description: Le masque a été supprimé avec succès
 *       404:
 *         description: Masque non trouvé
 */

router.get('/', maskController.getAllMasks);
router.post('/', maskController.createMask);
router.get('/:id', maskController.getMaskById);
router.put('/:id', maskController.updateMask);
router.delete('/:id', maskController.deleteMask);

export default router;
