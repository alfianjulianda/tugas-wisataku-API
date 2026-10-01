import { PrismaService } from '../prisma/prisma.service';
import { Destinasi } from './entities/destinasi.entity';
import { DestinasiService } from './destinasi.service';
export declare class DestinasiResolver {
    private readonly destinasiService;
    private readonly prisma;
    constructor(destinasiService: DestinasiService, prisma: PrismaService);
    findOne(id: number): Promise<{
        nama: string;
        kategori: string;
        hargaTiket: number;
        id: number;
        lokasi: string | null;
        ratingRata: number;
        createdAt: Date;
    }>;
    findAll(kategori?: string): Promise<{
        nama: string;
        kategori: string;
        hargaTiket: number;
        id: number;
        lokasi: string | null;
        ratingRata: number;
        createdAt: Date;
    }[]>;
    getUlasan(destinasi: Destinasi): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        rating: number;
        komentar: string;
        destinasiId: number;
    }[]>;
    getFasilitas(destinasi: Destinasi): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        namaFasilitas: string;
        destinasiId: number;
    }[]>;
}
