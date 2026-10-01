import { Fasilitas } from '../../fasilitas/entities/fasilitas.entity';
import { Ulasan } from '../../ulasan/entities/ulasan.entity';
export declare class Destinasi {
    id: number;
    nama: string;
    kategori: string;
    hargaTiket: number;
    ratingRata: number;
    ulasan?: Ulasan[];
    fasilitas?: Fasilitas[];
}
