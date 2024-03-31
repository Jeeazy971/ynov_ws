import { Request, Response } from 'express';
import maskService from '../services/maskService';

class MaskController {
    // Créer un nouveau mask
    async createMask(req: Request, res: Response) {
        try {
            const mask = await maskService.createMask(req.body);
            res.status(201).send(mask);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    // Récupérer tous les masks
    async getAllMasks(req: Request, res: Response) {
        try {
            const masks = await maskService.getAllMasks();
            res.status(200).send(masks);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    // Récupérer un mask par son ID
    async getMaskById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const mask = await maskService.getMaskById(id);
            if (mask) {
                res.status(200).send(mask);
            } else {
                res.status(404).send({ message: 'Mask not found' });
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }

    // Mettre à jour un mask
    async updateMask(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const [updated] = await maskService.updateMask(id, req.body);
            if (updated) {
                const updatedMask = await maskService.getMaskById(id);
                res.status(200).send(updatedMask);
            } else {
                res.status(404).send({ message: 'Mask not found' });
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }

    // Supprimer un mask
    async deleteMask(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const deleted = await maskService.deleteMask(id);
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).send({ message: 'Mask not found' });
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default new MaskController();
