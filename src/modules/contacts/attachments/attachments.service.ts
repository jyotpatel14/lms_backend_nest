import { Injectable } from '@nestjs/common';
import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { UpdateAttachmentDto } from './dto/update-attachment.dto';

@Injectable()
export class AttachmentsService {
  create(createAttachmentDto: CreateAttachmentDto) {
    return 'This action adds a new attachment';
  }

  findAll() {
    return `This action returns all attachments`;
  }

  findOne(id: string) {
    return `This action returns a #${id} attachment`;
  }

  update(id: string, updateAttachmentDto: UpdateAttachmentDto) {
    return `This action updates a #${id} attachment`;
  }

  remove(id: string) {
    return `This action removes a #${id} attachment`;
  }
}
