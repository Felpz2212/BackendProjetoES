import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { LoginServiceService } from 'src/shared/services/login-service/login-service.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UsuariosService, LoginServiceService],
})
export class AuthModule {}
