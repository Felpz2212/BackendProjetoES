import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosTarefasService } from './usuarios-tarefas.service';
import { CreateUsuariosTarefaDto } from './dto/create-usuarios-tarefa.dto';
import { UpdateUsuariosTarefaDto } from './dto/update-usuarios-tarefa.dto';

@Controller('usuarios-tarefas')
export class UsuariosTarefasController {
  constructor(private readonly usuariosTarefasService: UsuariosTarefasService) {}

  @Post()
  create(@Body() createUsuariosTarefaDto: CreateUsuariosTarefaDto) {
    return this.usuariosTarefasService.create(createUsuariosTarefaDto);
  }

  @Get()
  findAll() {
    return this.usuariosTarefasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosTarefasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuariosTarefaDto: UpdateUsuariosTarefaDto) {
    return this.usuariosTarefasService.update(id, updateUsuariosTarefaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosTarefasService.remove(id);
  }
}
