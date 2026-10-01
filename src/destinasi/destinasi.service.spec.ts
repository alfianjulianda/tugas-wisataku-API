import { ConflictException, NotFoundException } from '@nestjs/common';
import { jest } from '@jest/globals';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { DestinasiService } from './destinasi.service';

describe('DestinasiService', () => {
  let service: DestinasiService;
  let prisma: {
    destinasi: {
      create: jest.Mock;
      delete: jest.Mock;
      findUnique: jest.Mock;
      update: jest.Mock;
    };
  };

  beforeEach(() => {
    prisma = {
      destinasi: {
        create: jest.fn(),
        delete: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
      },
    };
    service = new DestinasiService(prisma as unknown as PrismaService);
  });

  it('maps duplicate-key errors to ConflictException', async () => {
    prisma.destinasi.create.mockRejectedValue(
      new Prisma.PrismaClientKnownRequestError('Duplicate record', {
        code: 'P2002',
        clientVersion: 'test',
      }),
    );

    await expect(service.create({} as never)).rejects.toBeInstanceOf(
      ConflictException,
    );
  });

  it('maps records removed during update to NotFoundException', async () => {
    prisma.destinasi.findUnique.mockResolvedValue({ id: 1 });
    prisma.destinasi.update.mockRejectedValue(
      new Prisma.PrismaClientKnownRequestError('Record not found', {
        code: 'P2025',
        clientVersion: 'test',
      }),
    );

    await expect(service.update(1, {} as never)).rejects.toBeInstanceOf(
      NotFoundException,
    );
  });
});