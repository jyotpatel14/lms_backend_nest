import { Exclude } from 'class-transformer';
import {
  IsEmail,
  isEmail,
  IsOptional,
  IsPhoneNumber,
  IsUUID,
} from 'class-validator';

export class User {
  @IsUUID()
  id: string;

  name: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber()
  phone: string;

  is_active: number;
  created_at: Date;
  created_by: string;
  updated_at: Date;
  updated_by: string;
  deleted_at: Date;
  deleted_by: string;

  @Exclude()
  password: string;
}

export class UserLoginDTO {
  name: string;

  @IsEmail()
  email: string;

  @Exclude()
  password: string;
}
export class UserSignUpDTO {
  name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  // @IsPhoneNumber('US')
  @IsPhoneNumber('IN')
  phone: string;

  @Exclude()
  password: string;
}

// export class UserModel {
//   static async create(user: Omit<User, 'id'>): Promise<string> {
//     const id = uuidv4();
//     await pool.query(
//       'INSERT INTO users (id, name, email, phone) VALUES (?, ?, ?, ?)',
//       [id, user.name, user.email, user.phone],
//     );
//     return id;
//   }

//   // Update other methods to use string IDs
//   static async getById(id: string): Promise<User | null> {
//     const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
//     return (rows as User[])[0] || null;
//   }

//   static async getAll(): Promise<User[] | null> {
//     const [rows] = await pool.query('SELECT * FROM users');
//     return (rows as User[]) || null;
//   }

//   static async update(id: string, user: Partial<User>): Promise<boolean> {
//     const [result] = await pool.query('UPDATE users SET ? WHERE id = ?', [
//       user,
//       id,
//     ]);
//     return (result as any).affectedRows > 0;
//   }

//   static async delete(id: string): Promise<boolean> {
//     const [result] = await pool.query('DELETE FROM users WHERE id = ?', [id]);
//     return (result as any).affectedRows > 0;
//   }
// }
