"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const sequelize_1 = require("sequelize");
// Charger les variables d'environnement
(0, dotenv_1.config)();
// Fonction pour extraire et valider les configurations de la base de données depuis les variables d'environnement ou utiliser des valeurs par défaut
function getDatabaseConfig() {
    return {
        DB_HOST: process.env.DB_HOST || 'localhost',
        DB_PORT: parseInt(process.env.DB_PORT || '5432', 10),
        DB_DATABASE: process.env.DB_DATABASE || 'postgres',
        DB_USERNAME: process.env.DB_USERNAME || 'postgres',
        DB_PASSWORD: process.env.DB_PASSWORD || '',
        DB_DIALECT: (process.env.DB_DIALECT || 'postgres'),
    };
}
const { DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD, DB_DIALECT } = getDatabaseConfig();
// Création de l'instance Sequelize avec les configurations
const sequelize = new sequelize_1.Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
    logging: false, // Désactiver les logs SQL pour la clarté, activer selon besoin
});
exports.default = sequelize;
// Tester la connexion
async function testDatabaseConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connexion à la base de données réussie !');
    }
    catch (error) {
        console.error('Impossible de se connecter à la base de données:', error);
    }
}
testDatabaseConnection();
