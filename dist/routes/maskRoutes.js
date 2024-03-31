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
 *   parameters:
 *     maskId:
 *       in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: integer
 *         description: L'ID unique du masque.
 *
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
 *
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
 *       400:
 *         description: Données de requête invalides
 *
 * /masks/{id}:
 *   get:
 *     summary: Renvoie un masque par son ID
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
router.get('/', maskController_1.default.getAllMasks);
router.post('/', maskController_1.default.createMask);
router.get('/:id', maskController_1.default.getMaskById);
router.put('/:id', maskController_1.default.updateMask);
router.delete('/:id', maskController_1.default.deleteMask);
exports.default = router;
