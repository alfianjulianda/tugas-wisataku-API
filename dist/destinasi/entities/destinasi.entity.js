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
exports.Destinasi = void 0;
const graphql_1 = require("@nestjs/graphql");
const fasilitas_entity_1 = require("../../fasilitas/entities/fasilitas.entity");
const ulasan_entity_1 = require("../../ulasan/entities/ulasan.entity");
let Destinasi = class Destinasi {
    id;
    nama;
    kategori;
    hargaTiket;
    ratingRata;
    ulasan;
    fasilitas;
};
exports.Destinasi = Destinasi;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Destinasi.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Destinasi.prototype, "nama", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Destinasi.prototype, "kategori", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], Destinasi.prototype, "hargaTiket", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], Destinasi.prototype, "ratingRata", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ulasan_entity_1.Ulasan], { nullable: true }),
    __metadata("design:type", Array)
], Destinasi.prototype, "ulasan", void 0);
__decorate([
    (0, graphql_1.Field)(() => [fasilitas_entity_1.Fasilitas], { nullable: true }),
    __metadata("design:type", Array)
], Destinasi.prototype, "fasilitas", void 0);
exports.Destinasi = Destinasi = __decorate([
    (0, graphql_1.ObjectType)()
], Destinasi);
//# sourceMappingURL=destinasi.entity.js.map