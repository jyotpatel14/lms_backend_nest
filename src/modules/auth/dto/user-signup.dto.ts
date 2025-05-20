import { Exclude } from 'class-transformer';
import { IsEmail, IsOptional, IsPhoneNumber } from 'class-validator';

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
