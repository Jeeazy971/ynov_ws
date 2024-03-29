import { Request, Response } from 'express';
import * as maskService from '../services/maskService';

export const getAllMasks = async (req: Request, res: Response): Promise<void> => {
    try {
        const masks = await maskService.getAllMasks();
        res.json(masks);
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving masks' });
    }
};

export const getMaskById = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id);
        const mask = await maskService.getMaskById(id);
        if (mask) {
            res.json(mask);
        } else {
            res.status(404).send({ message: 'Mask not found' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving mask' });
    }
};

export const createMask = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, description, maskJson } = req.body;
        const newMask = await maskService.createMask(name, description, maskJson);
        res.status(201).json(newMask);
    } catch (error) {
        res.status(400).send({ message: 'Error creating mask' });
    }
};

export const updateMask = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id);
        const { name, description, maskJson } = req.body;
        const result = await maskService.updateMask(id, name, description, maskJson);
        if (result[0] > 0) {
            res.send({ message: 'Mask updated successfully' });
        } else {
            res.status(404).send({ message: 'Mask not found' });
        }
    } catch (error) {
        res.status(400).send({ message: 'Error updating mask' });
    }
};

export const deleteMask = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id);
        const deleteCount = await maskService.deleteMask(id);
        if (deleteCount > 0) {
            res.send({ message: 'Mask deleted successfully' });
        } else {
            res.status(404).send({ message: 'Mask not found' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error deleting mask' });
    }
};
