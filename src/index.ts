import dotenv from 'dotenv';
import express, { Application } from 'express';
import * as swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swaggerConfig';
import maskRoutes from './routes/maskRoutes';
import entryRoutes from './routes/entryRoutes';
import connectMongoDB from './config/mongodb';
import sequelize from './config/sequelize';

const dotenvFileName = process.env.NODE_ENV === 'production' ? '.env.production' : '.env';
dotenv.config({ path: dotenvFileName });

const app: Application = express();
const PORT: number | string = process.env.PORT || 3000;

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/masks', maskRoutes);
app.use('/entries', entryRoutes);

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('La connexion à PostgreSQL a été établie avec succès.');

        await sequelize.sync({ force: false });
        console.log('Synchronisation des modèles de base de données.');

        await connectMongoDB();
        console.log('Connecté à MongoDB');

        app.listen(PORT, () =>
            console.log(`Serveur fonctionnant sur http://localhost:${PORT}/api-docs`),
        );
    } catch (error) {
        console.error('Erreur de connexion à la base de données :', error);
        process.exit(1);
    }
}

startServer();
