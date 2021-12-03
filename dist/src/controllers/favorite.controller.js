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
exports.updateFavorite = exports.deleteFavorite = exports.createFavorite = exports.getSingleFavorite = exports.getFavorite = void 0;
const favorite_entity_1 = require("../entity/favorite.entity");
const typeorm_1 = require("typeorm");
const getFavorite = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const favorite = yield favorite_entity_1.Favorite.find();
    if (!favorite) {
        return res.send({ message: "No favorites found" });
    }
    else {
        return res.json(favorite);
    }
});
exports.getFavorite = getFavorite;
const getSingleFavorite = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const favorite = yield favorite_entity_1.Favorite.findOne(parseInt(id, 10));
    if (!favorite) {
        return res.json({
            message: "No favorite found.",
        });
    }
    return res.json(favorite);
});
exports.getSingleFavorite = getSingleFavorite;
const createFavorite = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // post a new favorite
    const { cryptoName, note } = req.body;
    const favorite = favorite_entity_1.Favorite.create({
        cryptoName: cryptoName,
        note: note,
    });
    yield favorite.save();
    return res.json(favorite);
});
exports.createFavorite = createFavorite;
const deleteFavorite = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const response = yield favorite_entity_1.Favorite.delete(parseInt(id, 10));
    return res.json(response);
});
exports.deleteFavorite = deleteFavorite;
const updateFavorite = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { cryptoName, note } = req.body;
    const entityManager = (0, typeorm_1.getManager)();
    const favorite = yield favorite_entity_1.Favorite.findOne(parseInt(id, 10));
    favorite.note = note;
    yield entityManager.save(favorite);
    if (!favorite) {
        return res.json({
            message: "No favorite found.",
        });
    }
    return res.json(favorite);
});
exports.updateFavorite = updateFavorite;
//# sourceMappingURL=favorite.controller.js.map