import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginServiceService } from 'src/shared/services/login-service/login-service.service';
import { loginDTO } from './dto/loginDTO';

@Controller('auth')
export class AuthController {
  constructor(private readonly loginService: LoginServiceService) {}

  @Post()
  Login(@Body() paramsLogin: loginDTO){
    return this.loginService.login(paramsLogin.email, paramsLogin.senha);
  }
}
