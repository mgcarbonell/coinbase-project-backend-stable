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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrencyData = void 0;
const axios_1 = __importDefault(require("axios"));
const getCurrencyData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product } = req.body;
        const api = `https://api.exchange.coinbase.com/products/${product}/stats`;
        const response = yield axios_1.default.get(api);
        let queryObj = yield res.json(response.data);
        return queryObj;
    }
    catch (error) {
        res.json({ error });
    }
});
exports.getCurrencyData = getCurrencyData;
const calculate24Difference = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
//# sourceMappingURL=currency.controller.js.map