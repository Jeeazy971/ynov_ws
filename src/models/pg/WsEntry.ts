import { WsMask } from './wsMask';
import { sequelize } from './../../config/sequelize';
import { DataTypes } from 'sequelize';

export const WsEntry = sequelize.define(
    'WsEntry',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        id_mask: {
            type: DataTypes.INTEGER,
            references: {
                model: WsMask,
                key: 'id',
            },
        },
        entry_json: { type: DataTypes.JSONB },
    },
    {
        timestamps: false,
        tableName: 'ws_entries',
    },
);
