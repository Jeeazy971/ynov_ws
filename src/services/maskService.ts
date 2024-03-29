import { WsMask } from './../models/pg/wsMask';

export const createMask = async (name: string, description: string, maskJson: object) => {
    return await WsMask.create({ name, description, mask_json: maskJson });
};

export const getAllMasks = async () => {
    return await WsMask.findAll();
};

export const getMaskById = async (id: number) => {
    try {
        const mask = await WsMask.findByPk(id);
        return mask;
    } catch (error) {
        console.error('Error getting mask by ID:', error);
        throw error;
    }
};

export const updateMask = async (
    id: number,
    name?: string,
    description?: string,
    maskJson?: object,
) => {
    return await WsMask.update(
        { name, description, mask_json: maskJson },
        { where: { id } },
    );
};

export const deleteMask = async (id: number) => {
    return await WsMask.destroy({ where: { id } });
};
