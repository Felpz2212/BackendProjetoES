import { Module } from '@nestjs/common';
import { UsuariosProjetosService } from './usuarios-projetos.service';
import { UsuariosProjetosController } from './usuarios-projetos.controller';

@Module({
  controllers: [UsuariosProjetosController],
  providers: [UsuariosProjetosService],
})
export class UsuariosProjetosModule {}
