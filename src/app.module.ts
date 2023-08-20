import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProjetosModule } from './projetos/projetos.module';
import { TarefasModule } from './tarefas/tarefas.module';
import { UsuariosTarefasModule } from './usuarios-tarefas/usuarios-tarefas.module';
import { UsuariosProjetosModule } from './usuarios-projetos/usuarios-projetos.module';

@Module({
  imports: [UsuariosModule, ProjetosModule, TarefasModule, UsuariosTarefasModule, UsuariosProjetosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
