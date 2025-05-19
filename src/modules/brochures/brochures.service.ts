import { Injectable } from '@nestjs/common';
import { CreateBrochureDto } from './dto/create-brochure.dto';
import { UpdateBrochureDto } from './dto/update-brochure.dto';

@Injectable()
export class BrochuresService {
  create(createBrochureDto: CreateBrochureDto) {
    return 'This action adds a new brochure';
  }

  findAll() {
    return `This action returns all brochures`;
  }

  findOne(id: number) {
    return `This action returns a #${id} brochure`;
  }

  update(id: number, updateBrochureDto: UpdateBrochureDto) {
    return `This action updates a #${id} brochure`;
  }

  remove(id: number) {
    return `This action removes a #${id} brochure`;
  }
}
