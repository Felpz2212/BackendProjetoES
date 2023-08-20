import { Injectable } from '@nestjs/common';
import { CreateUsuariosTarefaDto } from './dto/create-usuarios-tarefa.dto';
import { UpdateUsuariosTarefaDto } from './dto/update-usuarios-tarefa.dto';

@Injectable()
export class UsuariosTarefasService {
  create(createUsuariosTarefaDto: CreateUsuariosTarefaDto) {
    return 'This action adds a new usuariosTarefa';
  }

  findAll() {
    return `This action returns all usuariosTarefas`;
  }

  findOne(id: string) {
    return `This action returns a #${id} usuariosTarefa`;
  }

  update(id: string, updateUsuariosTarefaDto: UpdateUsuariosTarefaDto) {
    return `This action updates a #${id} usuariosTarefa`;
  }

  remove(id: string) {
    return `This action removes a #${id} usuariosTarefa`;
  }
}
