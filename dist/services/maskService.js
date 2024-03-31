"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wsMask_1 = __importDefault(require("../models/pg/wsMask"));
class MaskService {
    // Créer un nouveau mask
    async createMask(maskData) {
        try {
            const mask = await wsMask_1.default.create(maskData);
            return mask;
        }
        catch (error) {
            throw new Error('Error creating mask');
        }
    }
    // Récupérer tous les masks
    async getAllMasks() {
        try {
            const masks = await wsMask_1.default.findAll();
            return masks;
        }
        catch (error) {
            throw new Error('Error fetching masks');
        }
    }
    // Récupérer un mask par son ID
    async getMaskById(id) {
        try {
            const mask = await wsMask_1.default.findByPk(id);
            return mask;
        }
        catch (error) {
            throw new Error('Error fetching mask by ID');
        }
    }
    // Mettre à jour un mask par son ID
    async updateMask(id, maskData) {
        try {
            const [affectedCount, updatedMasks] = await wsMask_1.default.update(maskData, {
                where: { id },
                returning: true, // Needed for returning the updated masks
            });
            return [affectedCount, updatedMasks];
        }
        catch (error) {
            throw new Error('Error updating mask');
        }
    }
    // Supprimer un mask par son ID
    async deleteMask(id) {
        try {
            const affectedRows = await wsMask_1.default.destroy({
                where: { id },
            });
            return affectedRows;
        }
        catch (error) {
            throw new Error('Error deleting mask');
        }
    }
}
exports.default = new MaskService();
