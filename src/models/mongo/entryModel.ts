import { Schema, model, Document } from 'mongoose';

export interface IEntry extends Document {
    name: string;
    description: string;
    idMask: number;
    entryJson: {
        usage: string;
        quantity: number;
    };
    createdAt: Date;
}

const entrySchema = new Schema<IEntry>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    idMask: { type: Number, required: true },
    entryJson: {
        usage: { type: String, required: true },
        quantity: { type: Number, required: true },
    },
    createdAt: { type: Date, default: Date.now },
});

export const Entry = model<IEntry>('Entry', entrySchema);
