import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DestinasiService } from './destinasi.service';
import { CreateDestinasiDto } from './dto/create-destinasi.dto';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto';

@ApiTags('Destinasi')
@Controller('destinasi')
export class DestinasiController {
  constructor(private readonly destinasiService: DestinasiService) {}

  @Get()
  @ApiOperation({
    summary: 'Menampilkan daftar destinasi, dapat difilter berdasarkan kategori',
  })
  findAll(@Query('kategori') kategori?: string) {
    return this.destinasiService.findAll(kategori);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.destinasiService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Menambahkan destinasi baru' })
  create(@Body() dto: CreateDestinasiDto) {
    return this.destinasiService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mengubah data destinasi' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateDestinasiDto,
  ) {
    return this.destinasiService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Menghapus destinasi' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.destinasiService.remove(id);
  }
}