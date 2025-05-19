import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'mysql2/promise';
import { v4 as uuidv4 } from 'uuid'; // or your DTO/model location
import { User } from './User';
import { instanceToPlain, plainToInstance } from 'class-transformer';

@Injectable()
export class UsersService {
  constructor(@Inject('DB_POOL') private readonly db: Pool) {}

  async create(
    user: Pick<User, 'email' | 'password' | 'name' | 'phone'>,
  ): Promise<string> {
    const id = uuidv4();
    await this.db.query(
      'INSERT INTO users (id, name, email, password, phone) VALUES (?, ?, ?, ?,?)',
      [id, user.name, user.email, user.password, user.phone],
    );
    return id;
  }

  async getById(id: string): Promise<Partial<User> | null> {
    const [rows] = await this.db.query('SELECT * FROM users WHERE id = ?', [
      id,
    ]);

    const userRow = (rows as User[])[0];
    if (!userRow) return null;

    // Convert plain object to User class instance
    const userInstance = plainToInstance(User, userRow);

    // Convert instance back to plain object (with @Exclude applied)
    return instanceToPlain(userInstance);
  }

  async getAll(): Promise<Partial<User>[]> {
    const [rows] = await this.db.query('SELECT * FROM users');

    // Step 1: Convert all rows to instances of User
    const userInstances = plainToInstance(User, rows as User[]);

    // Step 2: Convert each instance to plain object (without password)
    return userInstances.map((user) => instanceToPlain(user));
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
