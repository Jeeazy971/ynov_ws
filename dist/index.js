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
const dotenvFileName = process.env.NODE_ENV === 'production' ? '.env.production' : '.env';
dotenv_1.default.config({ path: dotenvFileName });
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig_1.default));
app.use('/masks', maskRoutes_1.default);
app.use('/entries', entryRoutes_1.default);
async function startServer() {
    try {
        await sequelize_1.default.authenticate();
        console.log('La connexion à PostgreSQL a été établie avec succès.');
        await sequelize_1.default.sync({ force: false });
        console.log('Synchronisation des modèles de base de données.');
        await (0, mongodb_1.default)();
        console.log('Connecté à MongoDB');
        app.listen(PORT, () => console.log(`Serveur fonctionnant sur http://localhost:${PORT}/api-docs`));
    }
    catch (error) {
        console.error('Erreur de connexion à la base de données :', error);
        process.exit(1);
    }
}
startServer();
