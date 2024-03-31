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
const maskService_1 = __importDefault(require("../services/maskService"));
class MaskController {
    // Créer un nouveau mask
    createMask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const mask = yield maskService_1.default.createMask(req.body);
                res.status(201).send(mask);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    // Récupérer tous les masks
    getAllMasks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const masks = yield maskService_1.default.getAllMasks();
                res.status(200).send(masks);
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
    // Récupérer un mask par son ID
    getMaskById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const mask = yield maskService_1.default.getMaskById(id);
                if (mask) {
                    res.status(200).send(mask);
                }
                else {
                    res.status(404).send({ message: 'Mask not found' });
                }
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
    // Mettre à jour un mask
    updateMask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const [updated] = yield maskService_1.default.updateMask(id, req.body);
                if (updated) {
                    const updatedMask = yield maskService_1.default.getMaskById(id);
                    res.status(200).send(updatedMask);
                }
                else {
                    res.status(404).send({ message: 'Mask not found' });
                }
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
    // Supprimer un mask
    deleteMask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const deleted = yield maskService_1.default.deleteMask(id);
                if (deleted) {
                    res.status(204).send();
                }
                else {
                    res.status(404).send({ message: 'Mask not found' });
                }
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
}
exports.default = new MaskController();
