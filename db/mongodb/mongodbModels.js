const connect = require('./mongodbConnect');

async function createCollections() {
    const client = await connect();
    const db = client.db('votreNomDeBaseDeDonnees');

    try {
        await db.createCollection('ws_masks', {
            validator: {
                $jsonSchema: {
                    bsonType: 'object',
                    required: ['name', 'description', 'mask_json'],
                    properties: {
                        name: {
                            bsonType: 'string',
                            description: 'must be a string and is required',
                        },
                        description: {
                            bsonType: 'string',
                            description: 'must be a string and is required',
                        },
                        mask_json: {
                            bsonType: 'object',
                            description: 'must be an object and is required',
                        },
                    },
                },
            },
        });

        console.log('Collection ws_masks créée avec succès');
    } catch (error) {
        console.error('Erreur lors de la création des collections', error);
    } finally {
        client.close();
    }
}

createCollections().catch(console.error);
