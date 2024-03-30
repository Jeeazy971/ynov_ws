"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMask = exports.updateMask = exports.createMask = exports.getMaskById = exports.getAllMasks = void 0;
const maskService = __importStar(require("../services/maskService"));
const getAllMasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const masks = yield maskService.getAllMasks();
        res.json(masks);
    }
    catch (error) {
        res.status(500).send({ message: 'Error retrieving masks' });
    }
});
exports.getAllMasks = getAllMasks;
const getMaskById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const mask = yield maskService.getMaskById(id);
        if (mask) {
            res.json(mask);
        }
        else {
            res.status(404).send({ message: 'Mask not found' });
        }
    }
    catch (error) {
        res.status(500).send({ message: 'Error retrieving mask' });
    }
});
exports.getMaskById = getMaskById;
const createMask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, maskJson } = req.body;
        const newMask = yield maskService.createMask(name, description, maskJson);
        res.status(201).json(newMask);
    }
    catch (error) {
        res.status(400).send({ message: 'Error creating mask' });
    }
});
exports.createMask = createMask;
const updateMask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { name, description, maskJson } = req.body;
        const result = yield maskService.updateMask(id, name, description, maskJson);
        if (result[0] > 0) {
            res.send({ message: 'Mask updated successfully' });
        }
        else {
            res.status(404).send({ message: 'Mask not found' });
        }
    }
    catch (error) {
        res.status(400).send({ message: 'Error updating mask' });
    }
});
exports.updateMask = updateMask;
const deleteMask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const deleteCount = yield maskService.deleteMask(id);
        if (deleteCount > 0) {
            res.send({ message: 'Mask deleted successfully' });
        }
        else {
            res.status(404).send({ message: 'Mask not found' });
        }
    }
    catch (error) {
        res.status(500).send({ message: 'Error deleting mask' });
    }
});
exports.deleteMask = deleteMask;
