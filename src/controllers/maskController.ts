import { Request, Response } from 'express';
import maskService from '../services/maskService';

class MaskController {
    async createMask(req: Request, res: Response): Promise<void> {
        try {
            const mask = await maskService.createMask(req.body);
            res.status(201).json(mask);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'An unknown error occurred.' });
            }
        }
    }

    async getAllMasks(req: Request, res: Response): Promise<void> {
        try {
            const masks = await maskService.getAllMasks();
            res.status(200).json(masks);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'An unknown error occurred.' });
            }
        }
    }

    async getMaskById(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            const mask = await maskService.getMaskById(id);
            if (mask) {
                res.status(200).json(mask);
            } else {
                res.status(404).json({ message: 'Mask not found' });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'An unknown error occurred.' });
            }
        }
    }

    async updateMask(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            const [updated] = await maskService.updateMask(id, req.body);
            if (updated) {
                const updatedMask = await maskService.getMaskById(id);
                res.status(200).json(updatedMask);
            } else {
                res.status(404).json({ message: 'Mask not found' });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'An unknown error occurred.' });
            }
        }
    }

    async deleteMask(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            const deleted = await maskService.deleteMask(id);
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Mask not found' });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'An unknown error occurred.' });
            }
        }
    }
}

export default new MaskController();
