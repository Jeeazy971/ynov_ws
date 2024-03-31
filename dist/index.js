"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const swaggerUi = __importStar(require("swagger-ui-express"));
const swaggerConfig_1 = __importDefault(require("./config/swaggerConfig"));
const maskRoutes_1 = __importDefault(require("./routes/maskRoutes"));
const entryRoutes_1 = __importDefault(require("./routes/entryRoutes"));
const mongodb_1 = __importDefault(require("./config/mongodb"));
const sequelize_1 = __importDefault(require("./config/sequelize"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig_1.default));
app.use('/masks', maskRoutes_1.default);
app.use('/entries', entryRoutes_1.default);
// Fonction pour démarrer le serveur
async function startServer() {
    try {
        // Connexion à PostgreSQL via Sequelize
        await sequelize_1.default.authenticate();
        console.log('Connection to PostgreSQL has been established successfully.');
        // Synchronisation des modèles avec la base de données
        // 'force: true' supprimera toutes les tables existantes et les recréera
        // Utilisez avec prudence ou remplacez par 'force: false' pour éviter de supprimer les données
        await sequelize_1.default.sync({ force: false });
        console.log('Database models synchronized.');
        // Connexion à MongoDB
        await (0, mongodb_1.default)();
        console.log('Connected to MongoDB');
        // Démarrage du serveur
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/api-docs`));
    }
    catch (error) {
        console.error('Database connection error:', error);
        process.exit(1); // Arrêt du processus en cas d'échec de connexion
    }
}
startServer();
