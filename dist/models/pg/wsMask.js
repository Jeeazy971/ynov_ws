"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../../config/sequelize"); // Adjust import based on your setup
class Mask extends sequelize_1.Model {
}
// Initialize the model's schema using 'init'
Mask.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING(128), // Specify string length here if needed
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.STRING(128), // Specify string length here if needed
        allowNull: false,
    },
    rating: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'masks', // Specify the table name for the model
    sequelize: // Specify the table name for the model
    sequelize_2.sequelize, // Pass the sequelize instance
    timestamps: true, // Enable Sequelize to add createdAt and updatedAt timestamps
});
exports.default = Mask;
