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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEntryById = exports.updateEntryById = exports.findEntryById = exports.findAllEntries = exports.createEntry = void 0;
const entryModel_1 = require("../models/mongo/entryModel");
const createEntry = (entryData) => __awaiter(void 0, void 0, void 0, function* () {
    const entry = new entryModel_1.Entry(entryData);
    return entry.save();
});
exports.createEntry = createEntry;
const findAllEntries = () => __awaiter(void 0, void 0, void 0, function* () {
    return entryModel_1.Entry.find();
});
exports.findAllEntries = findAllEntries;
const findEntryById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return entryModel_1.Entry.findById(id);
});
exports.findEntryById = findEntryById;
const updateEntryById = (id, entryData) => __awaiter(void 0, void 0, void 0, function* () {
    return entryModel_1.Entry.findByIdAndUpdate(id, entryData, { new: true });
});
exports.updateEntryById = updateEntryById;
const deleteEntryById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield entryModel_1.Entry.deleteOne({ _id: id });
    return { deletedCount: result.deletedCount };
});
exports.deleteEntryById = deleteEntryById;
