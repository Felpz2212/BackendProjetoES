import { Injectable } from '@nestjs/common';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';
import { prismaClient } from 'src/database/prisma';

@Injectable()
export class ProjetosService {
  create(createProjetoDto: CreateProjetoDto) {
    return prismaClient.projeto.create({data: createProjetoDto});
  }

  findAll() {
    return prismaClient.projeto.findMany();
  }

  findOne(id: string) {
    return prismaClient.projeto.findUnique({where: {id}});
  }

  update(id: string, updateProjetoDto: UpdateProjetoDto) {
    return prismaClient.projeto.update({where: {id}, data: updateProjetoDto});
  }

  remove(id: string) {
    return prismaClient.projeto.delete({where: {id}});
  }

  findByOwner(id_owner: string){
    return prismaClient.projeto.findMany({where: {id_user_dono: id_owner}})
  }
}
