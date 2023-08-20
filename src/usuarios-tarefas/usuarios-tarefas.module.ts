import { Module } from '@nestjs/common';
import { UsuariosTarefasService } from './usuarios-tarefas.service';
import { UsuariosTarefasController } from './usuarios-tarefas.controller';

@Module({
  controllers: [UsuariosTarefasController],
  providers: [UsuariosTarefasService],
})
export class UsuariosTarefasModule {}
