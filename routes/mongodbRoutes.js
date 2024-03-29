const express = require('express');
const mongodbController = require('../controllers/mongodbController');
const router = express.Router();

// Route pour créer un nouveau masque
router.post('/masks', mongodbController.createMask);

// Route pour lire tous les masques
router.get('/masks', mongodbController.readMasks);

// Route pour lire un masque par son ID
router.get('/masks/:id', mongodbController.readMaskById);

// Route pour mettre à jour un masque
router.put('/masks/:id', mongodbController.updateMask);

// Route pour supprimer un masque
router.delete('/masks/:id', mongodbController.deleteMask);

module.exports = router;
