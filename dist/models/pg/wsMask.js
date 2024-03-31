"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../config/sequelize"));
class Mask extends sequelize_1.Model {
}
Mask.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    rating: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'masks',
    sequelize: sequelize_2.default,
    timestamps: true,
});
// Synchronisez les modèles avec la base de données
sequelize_2.default
    .sync({ alter: true }) // Utilisez `alter: true` avec prudence; idéal pour le développement
    .then(() => console.log('Models were synchronized successfully.'))
    .catch((error) => console.error('Failed to synchronize models:', error));
exports.default = Mask;
