import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { prismaClient } from 'src/database/prisma';

@Injectable()
export class UsuariosService {

  create(createUsuarioDto: CreateUsuarioDto) {
    return prismaClient.usuario.create({data: createUsuarioDto});
  }

  async findAll() {
    return await prismaClient.usuario.findMany();
  }

  async findOne(id: string) {
    return await prismaClient.usuario.findUnique({where: {id: id}}) ;
  }

  update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    return prismaClient.usuario.update({where: {id: id}, data: updateUsuarioDto});
  }

  remove(id: string) {
    return prismaClient.usuario.delete({where: {id}});
  }
}
