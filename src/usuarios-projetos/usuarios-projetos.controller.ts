import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosProjetosService } from './usuarios-projetos.service';
import { CreateUsuariosProjetoDto } from './dto/create-usuarios-projeto.dto';
import { UpdateUsuariosProjetoDto } from './dto/update-usuarios-projeto.dto';

@Controller('usuarios-projetos')
export class UsuariosProjetosController {
  constructor(private readonly usuariosProjetosService: UsuariosProjetosService) {}

  @Post()
  create(@Body() createUsuariosProjetoDto: CreateUsuariosProjetoDto) {
    return this.usuariosProjetosService.create(createUsuariosProjetoDto);
  }

  @Get()
  findAll() {
    return this.usuariosProjetosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosProjetosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuariosProjetoDto: UpdateUsuariosProjetoDto) {
    return this.usuariosProjetosService.update(id, updateUsuariosProjetoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosProjetosService.remove(id);
  }
}
