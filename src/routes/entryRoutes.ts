import express from 'express';
import {
    createEntry,
    getAllEntries,
    getEntryById,
    updateEntry,
    deleteEntry,
} from '../controllers/entryController';

const router = express.Router();

/**
 * @swagger
 * /entries:
 *   post:
 *     summary: Crée une nouvelle entrée
 *     tags: [Entries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Le nom de l'entrée
 *                 example: "Masque chirurgical"
 *               description:
 *                 type: string
 *                 description: La description de l'entrée
 *                 example: "Utilisé dans les hôpitaux"
 *               idMask:
 *                 type: integer
 *                 description: ID du masque associé à l'entrée
 *                 example: 1
 *               entryJson:
 *                 type: object
 *                 description: Les données JSON supplémentaires de l'entrée
 *                 example: { usage: "hospital", quantity: 100 }
 *     responses:
 *       201:
 *         description: Nouvelle entrée créée
 *       400:
 *         description: Erreur dans la requête
 */
router.post('/', createEntry);

/**
 * @swagger
 * /entries:
 *   get:
 *     summary: Liste toutes les entrées
 *     tags: [Entries]
 *     responses:
 *       200:
 *         description: Une liste des entrées
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Entry'
 */
router.get('/', getAllEntries);

/**
 * @swagger
 * /entries/{id}:
 *   get:
 *     summary: Trouve une entrée par son ID
 *     tags: [Entries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de l'entrée à retrouver
 *     responses:
 *       200:
 *         description: Une entrée spécifique
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Entry'
 *       404:
 *         description: Entrée non trouvée
 */
router.get('/:id', getEntryById);

/**
 * @swagger
 * /entries/{id}:
 *   put:
 *     summary: Met à jour une entrée par son ID
 *     tags: [Entries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de l'entrée à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idMask:
 *                 type: integer
 *                 description: ID du masque associé à l'entrée
 *                 example: 1
 *               entryJson:
 *                 type: object
 *                 description: Les données JSON de l'entrée mise à jour
 *                 example: { usage: "office", quantity: 200 }
 *     responses:
 *       200:
 *         description: Entrée mise à jour avec succès
 *       404:
 *         description: Entrée non trouvée
 */
router.put('/:id', updateEntry);

/**
 * @swagger
 * /entries/{id}:
 *   delete:
 *     summary: Supprime une entrée par son ID
 *     tags: [Entries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de l'entrée à supprimer
 *     responses:
 *       204:
 *         description: Entrée supprimée avec succès
 *       404:
 *         description: Entrée non trouvée
 */
router.delete('/:id', deleteEntry);

export default router;
