import { DestinasiService } from './destinasi.service';
import { CreateDestinasiDto } from './dto/create-destinasi.dto';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto';
export declare class DestinasiController {
    private readonly destinasiService;
    constructor(destinasiService: DestinasiService);
    findAll(kategori?: string): Promise<{
        nama: string;
        kategori: string;
        hargaTiket: number;
        id: number;
        lokasi: string | null;
        ratingRata: number;
        createdAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        nama: string;
        kategori: string;
        hargaTiket: number;
        id: number;
        lokasi: string | null;
        ratingRata: number;
        createdAt: Date;
    }>;
    create(dto: CreateDestinasiDto): Promise<{
        nama: string;
        kategori: string;
        hargaTiket: number;
        id: number;
        lokasi: string | null;
        ratingRata: number;
        createdAt: Date;
    }>;
    update(id: number, dto: UpdateDestinasiDto): Promise<{
        nama: string;
        kategori: string;
        hargaTiket: number;
        id: number;
        lokasi: string | null;
        ratingRata: number;
        createdAt: Date;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
