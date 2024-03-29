const { MongoClient } = require('mongodb');

// Remplacez l'URI ci-dessous avec votre propre chaîne de connexion MongoDB
const uri =
    'mongodb+srv://votreUtilisateur:votreMotDePasse@votreServeur/test?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
    try {
        await client.connect();
        console.log('Connecté à MongoDB');
    } catch (error) {
        console.error('Erreur de connexion à MongoDB', error);
    }
    return client;
}

// Exporte une fonction qui retourne une instance connectée du client
module.exports = connect;
