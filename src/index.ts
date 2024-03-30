import dotenv from 'dotenv';
import express, { Application } from 'express';
import * as swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swaggerConfig';
import maskRoutes from './routes/maskRoutes';
import entryRoutes from './routes/entryRoutes';
import connectMongoDB from './config/mongodb';
import { sequelize } from './config/sequelize';

dotenv.config();

const app: Application = express();
const PORT: number | string = process.env.PORT || 3000;

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/masks', maskRoutes);
app.use('/entries', entryRoutes);

// Fonction pour démarrer le serveur
async function startServer() {
    try {
        // Connexion à MongoDB
        await connectMongoDB();
        console.log('Connected to MongoDB');

        // Connexion à PostgreSQL via Sequelize
        await sequelize.authenticate();
        console.log('Connection to PostgreSQL has been established successfully.');

        // Démarrage du serveur
        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}/api-docs`),
        );
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1); // Arrêt du processus en cas d'échec de connexion
    }
}

startServer();
