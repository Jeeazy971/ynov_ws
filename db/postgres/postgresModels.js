const client = require('./dbConnect');

const createTables = async () => {
    const query1 = `
    CREATE TABLE IF NOT EXISTS ws_masks (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT,
      mask_json JSONB NOT NULL
    );
  `;

    const query2 = `
    CREATE TABLE IF NOT EXISTS ws_entries (
      id SERIAL PRIMARY KEY,
      id_mask INTEGER REFERENCES ws_masks(id),
      entry_json JSONB NOT NULL
    );
  `;

    try {
        await client.query(query1);
        console.log('Table ws_masks créée avec succès');
        await client.query(query2);
        console.log('Table ws_entries créée avec succès');
    } catch (error) {
        console.error('Erreur lors de la création des tables', error);
    } finally {
        client.end(); // Ferme la connexion
    }
};

createTables();
