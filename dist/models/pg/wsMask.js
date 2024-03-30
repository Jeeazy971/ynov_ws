"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsMask = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../config/sequelize"));
class WsMask extends sequelize_1.Model {
}
exports.WsMask = WsMask;
WsMask.init({
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.DataTypes.STRING },
    description: { type: sequelize_1.DataTypes.TEXT },
    mask_json: { type: sequelize_1.DataTypes.JSON },
}, { sequelize: sequelize_2.default, modelName: 'ws_mask' });
