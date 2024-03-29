import mongoose from 'mongoose';

const mongoURI = 'mongodb+srv://admin-josue:@ynovmask.lbmksbn.mongodb.net/';

mongoose
    .connect(mongoURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB:', err));

export default mongoose;
