const express = require('express');
const router = express.Router();
const postgresController = require('../controllers/postgresController');

// Route pour créer un nouveau masque
router.post('/masks', postgresController.createMask);

// Route pour lire tous les masques
router.get('/masks', postgresController.readMasks);

// Route pour lire un masque par son ID
router.get('/masks/:id', postgresController.readMaskById);

// Route pour mettre à jour un masque
router.put('/masks/:id', postgresController.updateMask);

// Route pour supprimer un masque
router.delete('/masks/:id', postgresController.deleteMask);

module.exports = router;
