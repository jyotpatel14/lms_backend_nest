import { Exclude } from 'class-transformer';
import { IsEmail } from 'class-validator';

export class UserLoginDTO {
  name: string;

  @IsEmail()
  email: string;

  @Exclude()
  password: string;
}
