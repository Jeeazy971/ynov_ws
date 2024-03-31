"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const maskService_1 = __importDefault(require("../services/maskService"));
class MaskController {
    async createMask(req, res) {
        try {
            const mask = await maskService_1.default.createMask(req.body);
            res.status(201).json(mask);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            }
            else {
                res.status(500).json({ message: 'An unknown error occurred.' });
            }
        }
    }
    async getAllMasks(req, res) {
        try {
            const masks = await maskService_1.default.getAllMasks();
            res.status(200).json(masks);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            }
            else {
                res.status(500).json({ message: 'An unknown error occurred.' });
            }
        }
    }
    async getMaskById(req, res) {
        try {
            const id = parseInt(req.params.id);
            const mask = await maskService_1.default.getMaskById(id);
            if (mask) {
                res.status(200).json(mask);
            }
            else {
                res.status(404).json({ message: 'Mask not found' });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            }
            else {
                res.status(500).json({ message: 'An unknown error occurred.' });
            }
        }
    }
    async updateMask(req, res) {
        try {
            const id = parseInt(req.params.id);
            const [updated] = await maskService_1.default.updateMask(id, req.body);
            if (updated) {
                const updatedMask = await maskService_1.default.getMaskById(id);
                res.status(200).json(updatedMask);
            }
            else {
                res.status(404).json({ message: 'Mask not found' });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            }
            else {
                res.status(500).json({ message: 'An unknown error occurred.' });
            }
        }
    }
    async deleteMask(req, res) {
        try {
            const id = parseInt(req.params.id);
            const deleted = await maskService_1.default.deleteMask(id);
            if (deleted) {
                res.status(204).send();
            }
            else {
                res.status(404).json({ message: 'Mask not found' });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            }
            else {
                res.status(500).json({ message: 'An unknown error occurred.' });
            }
        }
    }
}
exports.default = new MaskController();
