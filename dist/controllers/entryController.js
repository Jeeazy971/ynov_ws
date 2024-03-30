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
exports.deleteEntry = exports.updateEntry = exports.getEntryById = exports.getAllEntries = exports.createEntry = void 0;
const entryService = __importStar(require("../services/entryService"));
const createEntry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const entry = yield entryService.createEntry(req.body);
        res.status(201).json(entry);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }
    }
});
exports.createEntry = createEntry;
const getAllEntries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const entries = yield entryService.findAllEntries();
        res.json(entries);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
});
exports.getAllEntries = getAllEntries;
const getEntryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const entry = yield entryService.findEntryById(req.params.id);
        if (entry) {
            res.json(entry);
        }
        else {
            res.status(404).json({ message: 'Entry not found' });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
});
exports.getEntryById = getEntryById;
const updateEntry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedEntry = yield entryService.updateEntryById(req.params.id, req.body);
        if (updatedEntry) {
            res.json(updatedEntry);
        }
        else {
            res.status(404).json({ message: 'Entry not found' });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
});
exports.updateEntry = updateEntry;
const deleteEntry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedEntry = yield entryService.deleteEntryById(req.params.id);
        if (deletedEntry) {
            res.status(204).send();
        }
        else {
            res.status(404).json({ message: 'Entry not found' });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
});
exports.deleteEntry = deleteEntry;
