import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
}

const mongoURI = process.env.MONGO_URI;

const connectMongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
    } catch (err) {
        console.error('Could not connect to MongoDB:', err);
        process.exit(1);
    }
};

export default connectMongoDB;
