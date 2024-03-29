import { Request, Response } from 'express';
import * as entryService from '../services/entryService';

export const createEntry = async (req: Request, res: Response): Promise<void> => {
    try {
        const entry = await entryService.createEntry(req.body);
        res.status(201).json(entry);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }
    }
};

export const getAllEntries = async (req: Request, res: Response): Promise<void> => {
    try {
        const entries = await entryService.findAllEntries();
        res.json(entries);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

export const getEntryById = async (req: Request, res: Response): Promise<void> => {
    try {
        const entry = await entryService.findEntryById(req.params.id);
        if (entry) {
            res.json(entry);
        } else {
            res.status(404).json({ message: 'Entry not found' });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

export const updateEntry = async (req: Request, res: Response): Promise<void> => {
    try {
        const updatedEntry = await entryService.updateEntryById(req.params.id, req.body);
        if (updatedEntry) {
            res.json(updatedEntry);
        } else {
            res.status(404).json({ message: 'Entry not found' });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

export const deleteEntry = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedEntry = await entryService.deleteEntryById(req.params.id);
        if (deletedEntry) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Entry not found' });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};
