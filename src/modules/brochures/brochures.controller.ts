import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BrochuresService } from './brochures.service';
import { CreateBrochureDto } from './dto/create-brochure.dto';
import { UpdateBrochureDto } from './dto/update-brochure.dto';

@Controller('brochures')
export class BrochuresController {
  constructor(private readonly brochuresService: BrochuresService) {}

  @Post()
  create(@Body() createBrochureDto: CreateBrochureDto) {
    return this.brochuresService.create(createBrochureDto);
  }

  @Get()
  findAll() {
    return this.brochuresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brochuresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrochureDto: UpdateBrochureDto) {
    return this.brochuresService.update(+id, updateBrochureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brochuresService.remove(+id);
  }
}
