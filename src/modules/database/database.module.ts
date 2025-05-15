import { Module, Global } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createDbPool } from 'src/config/db';

@Global()
@Module({
  providers: [
    {
      provide: 'DB_POOL',
      useFactory: async (configService: ConfigService) => {
        return await createDbPool(configService);
      },
      inject: [ConfigService],
    },
  ],
  exports: ['DB_POOL'],
})
export class DatabaseModule {}
