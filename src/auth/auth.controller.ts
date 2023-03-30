import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { RegistrationStatus } from './interfaces/registration-status.interface';
import { LoginUserDto } from 'src/users/dtos/loginUser.dto';
import { LoginStatus } from './interfaces/login-status.interface';


@Controller('/api/v1/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

   
}
