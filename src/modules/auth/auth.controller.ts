import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  UnauthorizedException,
  ValidationPipe,
} from '@nestjs/common';
import { User, UserLoginDTO, UserSignUpDTO } from '../users/User';

@Controller()
export class AuthController {
  @Post('/login')
  login(@Body() loginDTO: UserLoginDTO): any {
    try {
      //   throw new Error(); // simulate failed login

      return {
        loginDTO,
        message: 'login successful',
      };
    } catch (e: unknown) {
      throw new UnauthorizedException('login unsuccessful');
    }
  }

  @Post('/signup')
  signup(
    @Body()
    signupDTO: UserSignUpDTO,
  ): Object {
    return signupDTO;
  }

  @Get('/logout')
  logout(): string {
    return 'logout';
  }
}
