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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinasiResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const prisma_service_1 = require("../prisma/prisma.service");
const fasilitas_entity_1 = require("../fasilitas/entities/fasilitas.entity");
const ulasan_entity_1 = require("../ulasan/entities/ulasan.entity");
const destinasi_entity_1 = require("./entities/destinasi.entity");
const destinasi_service_1 = require("./destinasi.service");
let DestinasiResolver = class DestinasiResolver {
    destinasiService;
    prisma;
    constructor(destinasiService, prisma) {
        this.destinasiService = destinasiService;
        this.prisma = prisma;
    }
    findOne(id) {
        return this.destinasiService.findOne(id);
    }
    findAll(kategori) {
        return this.destinasiService.findAll(kategori);
    }
    getUlasan(destinasi) {
        return this.prisma.ulasan.findMany({
            where: { destinasiId: destinasi.id },
            orderBy: { createdAt: 'desc' },
            take: 3,
        });
    }
    getFasilitas(destinasi) {
        return this.prisma.fasilitas.findMany({
            where: { destinasiId: destinasi.id },
        });
    }
};
exports.DestinasiResolver = DestinasiResolver;
__decorate([
    (0, graphql_1.Query)(() => destinasi_entity_1.Destinasi, { name: 'destinasi' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DestinasiResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Query)(() => [destinasi_entity_1.Destinasi], { name: 'cariDestinasi' }),
    __param(0, (0, graphql_1.Args)('kategori', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DestinasiResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.ResolveField)('ulasan', () => [ulasan_entity_1.Ulasan]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [destinasi_entity_1.Destinasi]),
    __metadata("design:returntype", void 0)
], DestinasiResolver.prototype, "getUlasan", null);
__decorate([
    (0, graphql_1.ResolveField)('fasilitas', () => [fasilitas_entity_1.Fasilitas]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [destinasi_entity_1.Destinasi]),
    __metadata("design:returntype", void 0)
], DestinasiResolver.prototype, "getFasilitas", null);
exports.DestinasiResolver = DestinasiResolver = __decorate([
    (0, graphql_1.Resolver)(() => destinasi_entity_1.Destinasi),
    __metadata("design:paramtypes", [destinasi_service_1.DestinasiService,
        prisma_service_1.PrismaService])
], DestinasiResolver);
//# sourceMappingURL=destinasi.resolver.js.map