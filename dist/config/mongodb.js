"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
}
const mongoURI = process.env.MONGO_URI;
const connectMongoDB = async () => {
    try {
        await mongoose_1.default.connect(mongoURI);
    }
    catch (err) {
        console.error('Could not connect to MongoDB:', err);
        process.exit(1);
    }
};
exports.default = connectMongoDB;
