import { Entry, IEntry } from '../models/mongo/entryModel';

export const createEntry = async (entryData: IEntry): Promise<IEntry> => {
    const entry = new Entry(entryData);
    return entry.save();
};

export const findAllEntries = async (): Promise<IEntry[]> => {
    return Entry.find();
};

export const findEntryById = async (id: string): Promise<IEntry | null> => {
    return Entry.findById(id);
};

export const updateEntryById = async (
    id: string,
    entryData: Partial<IEntry>,
): Promise<IEntry | null> => {
    return Entry.findByIdAndUpdate(id, entryData, { new: true });
};

export const deleteEntryById = async (id: string): Promise<{ deletedCount?: number }> => {
    const result = await Entry.deleteOne({ _id: id });
    return { deletedCount: result.deletedCount };
};
