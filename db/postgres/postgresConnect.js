const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'ynov_ws',
    password: '',
    port: 5432,
});

client.connect((err) => {
    if (err) {
        console.error('erreur de connexion', err.stack);
    } else {
        console.log('Connecté à la base de données PostgreSQL');
    }
});

module.exports = client;
