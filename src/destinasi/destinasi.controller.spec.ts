import { Test, TestingModule } from '@nestjs/testing';
import { DestinasiController } from './destinasi.controller';
import { DestinasiService } from './destinasi.service';

describe('DestinasiController', () => {
  let controller: DestinasiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DestinasiController],
      providers: [{ provide: DestinasiService, useValue: {} }],
    }).compile();

    controller = module.get<DestinasiController>(DestinasiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
