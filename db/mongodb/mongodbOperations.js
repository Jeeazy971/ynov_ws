const { mongodbClient } = require('./mongodbConnect');

exports.insertMask = async ({ name, description, maskJson }) => {
    const collection = mongodbClient.db('votreBaseDeDonnees').collection('masks');
    const result = await collection.insertOne({ name, description, mask_json: maskJson });
    return result.ops[0]; 
};

exports.getMasks = async () => {
    const collection = mongodbClient.db('votreBaseDeDonnees').collection('masks');
    const masks = await collection.find({}).toArray();
    return masks;
};
