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
exports.Favorite1638083062342 = void 0;
const typeorm_1 = require("typeorm");
class Favorite1638083062342 {
    constructor() {
        this.table = new typeorm_1.Table({
            name: "favorite",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                    isGenerated: true,
                    isNullable: false,
                    generationStrategy: "increment",
                },
                {
                    name: "cryptoName",
                    type: "varchar",
                    length: "255",
                    isUnique: true,
                    isNullable: false,
                },
                {
                    name: "note",
                    type: "text",
                    length: "1000",
                    isNullable: true,
                },
                {
                    name: "created_at",
                    type: "timestamptz",
                    isNullable: false,
                    default: "now()",
                },
                {
                    name: "updated_at",
                    type: "timestamptz",
                    isNullable: false,
                    default: "now()",
                },
            ],
        });
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            // write SQL queries to ALTER table in RAW SQL here
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            // reverts what was down in "up" method
        });
    }
}
exports.Favorite1638083062342 = Favorite1638083062342;
//# sourceMappingURL=1638083062342-Favorite.js.map