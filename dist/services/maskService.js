"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wsMask_1 = __importDefault(require("../models/pg/wsMask"));
class MaskService {
    // Créer un nouveau mask
    createMask(maskData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const mask = yield wsMask_1.default.create(maskData);
                return mask;
            }
            catch (error) {
                throw new Error('Error creating mask');
            }
        });
    }
    // Récupérer tous les masks
    getAllMasks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const masks = yield wsMask_1.default.findAll();
                return masks;
            }
            catch (error) {
                throw new Error('Error fetching masks');
            }
        });
    }
    // Récupérer un mask par son ID
    getMaskById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const mask = yield wsMask_1.default.findByPk(id);
                return mask;
            }
            catch (error) {
                throw new Error('Error fetching mask by ID');
            }
        });
    }
    // Mettre à jour un mask par son ID
    updateMask(id, maskData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [affectedCount, updatedMasks] = yield wsMask_1.default.update(maskData, {
                    where: { id },
                    returning: true, // Needed for returning the updated masks
                });
                return [affectedCount, updatedMasks];
            }
            catch (error) {
                throw new Error('Error updating mask');
            }
        });
    }
    // Supprimer un mask par son ID
    deleteMask(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const affectedRows = yield wsMask_1.default.destroy({
                    where: { id },
                });
                return affectedRows;
            }
            catch (error) {
                throw new Error('Error deleting mask');
            }
        });
    }
}
exports.default = new MaskService();
