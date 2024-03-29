import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swaggerConfig';

import maskRoutes from './routes/maskRoutes';
import entryRoutes from './routes/entryRoutes';

const app: Application = express();

// Middleware pour parser les corps de requête JSON
app.use(express.json());

// Setup Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Utilisez vos routes importées avec le préfixe '/api' si désiré
app.use('/api/masks', maskRoutes);
app.use('/api/entries', entryRoutes);

// Définition du port
const PORT: number | string = process.env.PORT || 3000;

// Démarrage du serveur
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
