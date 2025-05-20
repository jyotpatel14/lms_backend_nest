import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async registerUser(
    userData: Pick<User, 'email' | 'password' | 'name' | 'phone'>,
  ): Promise<string> {
    return this.userService.create(userData);
  }
}
