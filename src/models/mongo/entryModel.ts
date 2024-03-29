import mongoose, { Document } from 'mongoose';

export interface IEntry extends Document {
    idMask: number;
    entryJson: object;
}

const entrySchema = new mongoose.Schema({
    idMask: { type: Number, required: true },
    entryJson: { type: Object, required: true },
});

export const Entry = mongoose.model<IEntry>('Entry', entrySchema);
