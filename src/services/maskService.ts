import Mask from "../models/pg/wsMask";

interface MaskData {
    name: string;
    type: string;
    rating: number;
}

class MaskService {
    // Créer un nouveau mask
    async createMask(maskData: MaskData): Promise<Mask> {
        const mask = await Mask.create(maskData);
        return mask;
    }

    // Récupérer tous les masks
    async getAllMasks(): Promise<Mask[]> {
        const masks = await Mask.findAll();
        return masks;
    }

    // Récupérer un mask par son ID
    async getMaskById(id: number): Promise<Mask | null> {
        const mask = await Mask.findByPk(id);
        return mask;
    }

    // Mettre à jour un mask par son ID
    async updateMask(
        id: number,
        maskData: Partial<MaskData>,
    ): Promise<[affectedCount: number]> {
        const [affectedCount] = await Mask.update(maskData, {
            where: { id },
        });
        return [affectedCount];
    }

    // Supprimer un mask par son ID
    async deleteMask(id: number): Promise<number> {
        const affectedRows = await Mask.destroy({
            where: { id },
        });
        return affectedRows;
    }
}

export default new MaskService();
