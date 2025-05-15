import { createPool, Pool } from 'mysql2/promise';
import { ConfigService } from '@nestjs/config';

export async function createDbPool(
  configService: ConfigService,
): Promise<Pool> {
  const pool = createPool({
    host: configService.get<string>('database.host'),
    user: configService.get<string>('database.user'),
    password: configService.get<string>('database.password'),
    database: configService.get<string>('database.name'),
    connectionLimit: 10,
  });

  try {
    await pool.getConnection();
    console.log('✅ Database connected successfully');
  } catch (err) {
    console.error('❌ Database connection failed:', err);
    throw err;
  }

  return pool;
}
