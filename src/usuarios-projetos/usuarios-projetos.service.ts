import { Injectable } from '@nestjs/common';
import { CreateUsuariosProjetoDto } from './dto/create-usuarios-projeto.dto';
import { UpdateUsuariosProjetoDto } from './dto/update-usuarios-projeto.dto';

@Injectable()
export class UsuariosProjetosService {
  create(createUsuariosProjetoDto: CreateUsuariosProjetoDto) {
    return 'This action adds a new usuariosProjeto';
  }

  findAll() {
    return `This action returns all usuariosProjetos`;
  }

  findOne(id: string) {
    return `This action returns a #${id} usuariosProjeto`;
  }

  update(id: string, updateUsuariosProjetoDto: UpdateUsuariosProjetoDto) {
    return `This action updates a #${id} usuariosProjeto`;
  }

  remove(id: string) {
    return `This action removes a #${id} usuariosProjeto`;
  }
}
