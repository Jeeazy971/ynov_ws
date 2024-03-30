"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsEntry = void 0;
const wsMask_1 = require("./wsMask");
const sequelize_1 = require("./../../config/sequelize");
const sequelize_2 = require("sequelize");
exports.WsEntry = sequelize_1.sequelize.define('WsEntry', {
    id: { type: sequelize_2.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_mask: {
        type: sequelize_2.DataTypes.INTEGER,
        references: {
            model: wsMask_1.WsMask,
            key: 'id',
        },
    },
    entry_json: { type: sequelize_2.DataTypes.JSONB },
}, {
    timestamps: false,
    tableName: 'ws_entries',
});
