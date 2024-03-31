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
        console.log('Connection to PostgreSQL has been established successfully.');

        await sequelize.sync({ force: false });
        console.log('Database models synchronized.');

        await connectMongoDB();
        console.log('Connected to MongoDB');

        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}/api-docs`),
        );
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
}

startServer();
