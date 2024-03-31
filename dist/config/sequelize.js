"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });
console.log({
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: 'REDACTED',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: process.env.DB_LOGGING === 'true',
});
const sequelize = new sequelize_1.Sequelize(process.env.DB_DATABASE || 'postgres', process.env.DB_USERNAME || 'postgres', process.env.DB_PASSWORD || '', {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    dialect: 'postgres',
    logging: process.env.DB_LOGGING === 'true',
});
async function testDatabaseConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connexion à la base de données réussie.');
    }
    catch (error) {
        console.error('Impossible de se connecter à la base de données:', error);
    }
}
testDatabaseConnection();
exports.default = sequelize;
