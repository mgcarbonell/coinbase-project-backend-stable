"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Favorite = void 0;
const typeorm_1 = require("typeorm");
let Favorite = class Favorite extends typeorm_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.cryptoName = "";
        this.note = null;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Favorite.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "cryptoName", unique: true, length: 20 }),
    __metadata("design:type", String)
], Favorite.prototype, "cryptoName", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "note", length: 1000, nullable: true }),
    __metadata("design:type", String)
], Favorite.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at" }),
    __metadata("design:type", Date)
], Favorite.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at" }),
    __metadata("design:type", Date)
], Favorite.prototype, "updatedAt", void 0);
Favorite = __decorate([
    (0, typeorm_1.Entity)({ name: "favorite" })
], Favorite);
exports.Favorite = Favorite;
//# sourceMappingURL=favorite.entity.js.map