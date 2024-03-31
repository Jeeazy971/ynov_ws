import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

console.log({
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: 'REDACTED',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: process.env.DB_LOGGING === 'true',
});

const sequelize = new Sequelize(
    process.env.DB_DATABASE || 'postgres',
    process.env.DB_USERNAME || 'postgres',
    process.env.DB_PASSWORD || '',
    {
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT || '5432', 10),
        dialect: 'postgres',
        logging: process.env.DB_LOGGING === 'true',
    },
);


async function testDatabaseConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connexion à la base de données réussie.');
    } catch (error) {
        console.error('Impossible de se connecter à la base de données:', error);
    }
}

testDatabaseConnection();

export default sequelize;
