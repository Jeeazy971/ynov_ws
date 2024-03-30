"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entry = void 0;
const mongoose_1 = require("mongoose");
const entrySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    idMask: { type: Number, required: true },
    entryJson: {
        usage: { type: String, required: true },
        quantity: { type: Number, required: true },
    },
    createdAt: { type: Date, default: Date.now },
});
exports.Entry = (0, mongoose_1.model)('Entry', entrySchema);
