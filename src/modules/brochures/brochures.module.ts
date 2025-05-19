import { Module } from '@nestjs/common';
import { BrochuresService } from './brochures.service';
import { BrochuresController } from './brochures.controller';

@Module({
  controllers: [BrochuresController],
  providers: [BrochuresService],
})
export class BrochuresModule {}
