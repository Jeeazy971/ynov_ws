"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEntryById = exports.updateEntryById = exports.findEntryById = exports.findAllEntries = exports.createEntry = void 0;
const entryModel_1 = require("../models/mongo/entryModel");
const createEntry = async (entryData) => {
    const entry = new entryModel_1.Entry(entryData);
    return entry.save();
};
exports.createEntry = createEntry;
const findAllEntries = async () => {
    return entryModel_1.Entry.find();
};
exports.findAllEntries = findAllEntries;
const findEntryById = async (id) => {
    return entryModel_1.Entry.findById(id);
};
exports.findEntryById = findEntryById;
const updateEntryById = async (id, entryData) => {
    return entryModel_1.Entry.findByIdAndUpdate(id, entryData, { new: true });
};
exports.updateEntryById = updateEntryById;
const deleteEntryById = async (id) => {
    const result = await entryModel_1.Entry.deleteOne({ _id: id });
    return { deletedCount: result.deletedCount };
};
exports.deleteEntryById = deleteEntryById;
