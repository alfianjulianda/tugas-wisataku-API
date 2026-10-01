import { PrismaService } from '../prisma/prisma.service';
import { CreateUlasanInput } from './dto/create-ulasan.input';
export declare class UlasanResolver {
    private readonly prisma;
    constructor(prisma: PrismaService);
    tambahUlasan(input: CreateUlasanInput): import("@prisma/client").Prisma.Prisma__UlasanClient<{
        id: number;
        createdAt: Date;
        rating: number;
        komentar: string;
        destinasiId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
