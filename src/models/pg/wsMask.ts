import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../../config/sequelize';

export class WsMask extends Model {}

WsMask.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING },
        description: { type: DataTypes.TEXT },
        mask_json: { type: DataTypes.JSON },
    },
    { sequelize, modelName: 'ws_mask' },
);
