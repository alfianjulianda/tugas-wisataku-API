import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDestinasiDto } from './dto/create-destinasi.dto';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto';

@Injectable()
export class DestinasiService {
  constructor(private prisma: PrismaService) {}

  async findAll(kategori?: string) {
    return this.prisma.destinasi.findMany({
      where: kategori ? { kategori } : undefined,
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const destinasi = await this.prisma.destinasi.findUnique({
      where: { id },
    });

    if (!destinasi) {
      throw new NotFoundException(
        `Destinasi dengan id ${id} tidak ditemukan`,
      );
    }

    return destinasi;
  }

  async create(dto: CreateDestinasiDto) {
    try {
      return await this.prisma.destinasi.create({
        data: dto,
      });
    } catch (error) {
      this.handlePrismaError(error);
    }
  }

  async update(id: number, dto: UpdateDestinasiDto) {
    await this.findOne(id);

    try {
      return await this.prisma.destinasi.update({
        where: { id },
        data: dto,
      });
    } catch (error) {
      this.handlePrismaError(error);
    }
  }

  async remove(id: number) {
    await this.findOne(id);

    try {
      await this.prisma.destinasi.delete({
        where: { id },
      });
    } catch (error) {
      this.handlePrismaError(error);
    }

    return {
      message: 'Destinasi berhasil dihapus',
    };
  }

  private handlePrismaError(error: unknown): never {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Destinasi tidak ditemukan');
      }

      if (error.code === 'P2002') {
        throw new ConflictException('Data destinasi sudah tersedia');
      }

      if (error.code === 'P2003') {
        throw new BadRequestException('Relasi data destinasi tidak valid');
      }
    }

    throw error;
  }
}