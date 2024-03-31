import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI doit être défini');
}

const mongoURI = process.env.MONGO_URI;

const connectMongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
    } catch (err) {
        console.error('Impossible de se connecter à MongoDB :', err);
        process.exit(1);
    }
};

export default connectMongoDB;
