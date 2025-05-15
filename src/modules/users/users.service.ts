import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'mysql2/promise';
import { v4 as uuidv4 } from 'uuid'; // or your DTO/model location
import { User } from './User';

@Injectable()
export class UsersService {
  constructor(@Inject('DB_POOL') private readonly db: Pool) {}

  async create(user: Omit<User, 'id'>): Promise<string> {
    const id = uuidv4();
    await this.db.query(
      'INSERT INTO users (id, name, email, phone) VALUES (?, ?, ?, ?)',
      [id, user.name, user.email, user.phone],
    );
    return id;
  }

  async getById(id: string): Promise<User | null> {
    const [rows] = await this.db.query('SELECT * FROM users WHERE id = ?', [
      id,
    ]);
    return (rows as User[])[0] || null;
  }

  async getAll(): Promise<User[]> {
    const [rows] = await this.db.query('SELECT * FROM users');
    return rows as User[];
  }

  async update(id: string, user: Partial<User>): Promise<number> {
    const [result] = await this.db.query('UPDATE users SET ? WHERE id = ?', [
      user,
      id,
    ]);
    return (result as any).affectedRows;
  }

  async delete(id: string): Promise<boolean> {
    const [result] = await this.db.query('DELETE FROM users WHERE id = ?', [
      id,
    ]);
    return (result as any).affectedRows > 0;
  }
}
