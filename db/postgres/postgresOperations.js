const client = require('./dbConnect');

// Insertion d'un nouveau masque
async function insertMask(name, description, maskJson) {
    try {
        const result = await client.query(
            'INSERT INTO ws_masks (name, description, mask_json) VALUES ($1, $2, $3) RETURNING *',
            [name, description, maskJson],
        );
        console.log('Insertion réussie:', result.rows[0]);
    } catch (error) {
        console.error("Erreur lors de l'insertion", error);
    }
}

// Récupération des masques
async function getMasks() {
    try {
        const result = await client.query('SELECT * FROM ws_masks');
        console.log('Récupération réussie:', result.rows);
    } catch (error) {
        console.error('Erreur lors de la récupération', error);
    }
}

async function run() {
    await insertMask('Masque1', 'Description du masque 1', '{"type": "type1"}');
    await getMasks();
    client.end(); // Ferme la connexion
}

run().catch(console.error);
