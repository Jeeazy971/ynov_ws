const postgresOperations = require('../db/postgres/postgresOperations');

// Créer un nouveau masque
exports.createMask = async (req, res) => {
    try {
        const { name, description, maskJson } = req.body;
        const newMask = await postgresOperations.createMask(name, description, maskJson);
        res.status(201).json(newMask);
    } catch (error) {
        res.status(500).json({
            message: 'Erreur lors de la création du masque',
            error: error.message,
        });
    }
};

// Lire tous les masques
exports.readMasks = async (req, res) => {
    try {
        const masks = await postgresOperations.readMasks();
        res.status(200).json(masks);
    } catch (error) {
        res.status(500).json({
            message: 'Erreur lors de la récupération des masques',
            error: error.message,
        });
    }
};

// Lire un seul masque par ID
exports.readMaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const mask = await postgresOperations.readMaskById(id);
        if (mask) {
            res.status(200).json(mask);
        } else {
            res.status(404).json({ message: 'Masque non trouvé' });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Erreur lors de la récupération du masque',
            error: error.message,
        });
    }
};

// Mettre à jour un masque
exports.updateMask = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, maskJson } = req.body;
        const updatedMask = await postgresOperations.updateMask(
            id,
            name,
            description,
            maskJson,
        );
        res.status(200).json(updatedMask);
    } catch (error) {
        res.status(500).json({
            message: 'Erreur lors de la mise à jour du masque',
            error: error.message,
        });
    }
};

// Supprimer un masque
exports.deleteMask = async (req, res) => {
    try {
        const { id } = req.params;
        await postgresOperations.deleteMask(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({
            message: 'Erreur lors de la suppression du masque',
            error: error.message,
        });
    }
};
