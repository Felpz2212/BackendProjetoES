import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProjetosModule } from './projetos/projetos.module';
import { TarefasModule } from './tarefas/tarefas.module';
import { UsuariosTarefasModule } from './usuarios-tarefas/usuarios-tarefas.module';
import { UsuariosProjetosModule } from './usuarios-projetos/usuarios-projetos.module';
import { AuthModule } from './auth/auth.module';
import { LoginServiceService } from './shared/services/login-service/login-service.service';
import { UsuariosService } from './usuarios/usuarios.service';

@Module({
  imports: [UsuariosModule, ProjetosModule, TarefasModule, UsuariosTarefasModule, UsuariosProjetosModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, LoginServiceService, UsuariosService],
})
export class AppModule {}
