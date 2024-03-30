"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMask = exports.updateMask = exports.getMaskById = exports.getAllMasks = exports.createMask = void 0;
const wsMask_1 = require("./../models/pg/wsMask");
const createMask = (name, description, maskJson) => __awaiter(void 0, void 0, void 0, function* () {
    return yield wsMask_1.WsMask.create({ name, description, mask_json: maskJson });
});
exports.createMask = createMask;
const getAllMasks = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield wsMask_1.WsMask.findAll();
});
exports.getAllMasks = getAllMasks;
const getMaskById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mask = yield wsMask_1.WsMask.findByPk(id);
        return mask;
    }
    catch (error) {
        console.error('Error getting mask by ID:', error);
        throw error;
    }
});
exports.getMaskById = getMaskById;
const updateMask = (id, name, description, maskJson) => __awaiter(void 0, void 0, void 0, function* () {
    return yield wsMask_1.WsMask.update({ name, description, mask_json: maskJson }, { where: { id } });
});
exports.updateMask = updateMask;
const deleteMask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield wsMask_1.WsMask.destroy({ where: { id } });
});
exports.deleteMask = deleteMask;
