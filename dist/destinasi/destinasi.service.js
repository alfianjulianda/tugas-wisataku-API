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
exports.DestinasiService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
let DestinasiService = class DestinasiService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(kategori) {
        return this.prisma.destinasi.findMany({
            where: kategori ? { kategori } : undefined,
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const destinasi = await this.prisma.destinasi.findUnique({
            where: { id },
        });
        if (!destinasi) {
            throw new common_1.NotFoundException(`Destinasi dengan id ${id} tidak ditemukan`);
        }
        return destinasi;
    }
    async create(dto) {
        try {
            return await this.prisma.destinasi.create({
                data: dto,
            });
        }
        catch (error) {
            this.handlePrismaError(error);
        }
    }
    async update(id, dto) {
        await this.findOne(id);
        try {
            return await this.prisma.destinasi.update({
                where: { id },
                data: dto,
            });
        }
        catch (error) {
            this.handlePrismaError(error);
        }
    }
    async remove(id) {
        await this.findOne(id);
        try {
            await this.prisma.destinasi.delete({
                where: { id },
            });
        }
        catch (error) {
            this.handlePrismaError(error);
        }
        return {
            message: 'Destinasi berhasil dihapus',
        };
    }
    handlePrismaError(error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Destinasi tidak ditemukan');
            }
            if (error.code === 'P2002') {
                throw new common_1.ConflictException('Data destinasi sudah tersedia');
            }
            if (error.code === 'P2003') {
                throw new common_1.BadRequestException('Relasi data destinasi tidak valid');
            }
        }
        throw error;
    }
};
exports.DestinasiService = DestinasiService;
exports.DestinasiService = DestinasiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DestinasiService);
//# sourceMappingURL=destinasi.service.js.map