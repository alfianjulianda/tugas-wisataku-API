import { Module } from '@nestjs/common';
import { DestinasiController } from './destinasi.controller';
import { DestinasiResolver } from './destinasi.resolver';
import { DestinasiService } from './destinasi.service';

@Module({
  controllers: [DestinasiController],
  providers: [DestinasiService, DestinasiResolver],
})
export class DestinasiModule {}