import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  Body,
  ParseUUIDPipe,
  NotFoundException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './User';
import { instanceToPlain } from 'class-transformer';

@Controller('/user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<Partial<User>[]> {
    return await this.usersService.getAll();
  }

  @Get('/:id')
  async getUserById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<Partial<User>> {
    const user = await this.usersService.getById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  @Post()
  async createUser(
    @Body() user: Pick<User, 'email' | 'password' | 'name' | 'phone'>,
  ): Promise<{ id: string }> {
    const id = await this.usersService.create(user);
    return { id };
  }

  @Put('/:id')
  async updateUser(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() user: Partial<User>,
  ): Promise<{ count: number }> {
    const result = await this.usersService.update(id, user);
    if (!result) {
      throw new NotFoundException(`User with ID ${id} not found for update`);
    }
    return { count: result };
  }

  @Patch('/:id')
  async patchUser(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() user: Partial<User>,
  ): Promise<{ count: number }> {
    const result = await this.usersService.update(id, user);
    if (!result) {
      throw new NotFoundException(`User with ID ${id} not found for patch`);
    }
    return { count: result };
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteUser(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    const success = await this.usersService.delete(id);
    if (!success) {
      throw new NotFoundException(`User with ID ${id} not found for deletion`);
    }
  }
}
