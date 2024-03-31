import Mask from '../models/pg/wsMask';

interface MaskData {
    name: string;
    type: string;
    rating: number;
}

class MaskService {
    // Créer un nouveau mask
    async createMask(maskData: MaskData): Promise<Mask> {
        try {
            const mask = await Mask.create(maskData);
            return mask;
        } catch (error) {
            throw new Error('Error creating mask');
        }
    }

    // Récupérer tous les masks
    async getAllMasks(): Promise<Mask[]> {
        try {
            const masks = await Mask.findAll();
            return masks;
        } catch (error) {
            throw new Error('Error fetching masks');
        }
    }

    // Récupérer un mask par son ID
    async getMaskById(id: number): Promise<Mask | null> {
        try {
            const mask = await Mask.findByPk(id);
            return mask;
        } catch (error) {
            throw new Error('Error fetching mask by ID');
        }
    }

    // Mettre à jour un mask par son ID
    async updateMask(id: number, maskData: Partial<MaskData>): Promise<[number, Mask[]]> {
        try {
            const [affectedCount, updatedMasks] = await Mask.update(maskData, {
                where: { id },
                returning: true, // Needed for returning the updated masks
            });
            return [affectedCount, updatedMasks];
        } catch (error) {
            throw new Error('Error updating mask');
        }
    }

    // Supprimer un mask par son ID
    async deleteMask(id: number): Promise<number> {
        try {
            const affectedRows = await Mask.destroy({
                where: { id },
            });
            return affectedRows;
        } catch (error) {
            throw new Error('Error deleting mask');
        }
    }
}

export default new MaskService();
