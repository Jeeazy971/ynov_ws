"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Définissez un tableau de dialectes valides
const validDialects = ['postgres', 'mysql', 'sqlite', 'mariadb', 'mssql'];
// Vérifiez que la valeur de l'environnement est dans les dialectes valides
const dialect = validDialects.includes(process.env.DB_DIALECT)
    ? process.env.DB_DIALECT
    : undefined;
console.log({
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD ? 'hH6Il5OfJVxN5CzyEl3g4B54iczFJ4uK' : undefined, // Pour la sécurité, ne loggez pas le mot de passe en clair
    DB_DIALECT: process.env.DB_DIALECT,
});
if (!dialect) {
    throw new Error('Invalid or unsupported dialect.');
}
const sequelize = new sequelize_1.Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect,
    port: +process.env.DB_PORT,
});
exports.default = sequelize;
