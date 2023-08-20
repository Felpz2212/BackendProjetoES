import { Injectable } from '@nestjs/common';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { prismaClient } from 'src/database/prisma';

@Injectable()
export class TarefasService {
  create(createTarefaDto: CreateTarefaDto) {
    return prismaClient.tarefa.create({data: createTarefaDto});
  }

  findAll() {
    return prismaClient.tarefa.findMany();
  }

  findOne(id: string) {
    return prismaClient.tarefa.findUnique({where: {id}});
  }

  update(id: string, updateTarefaDto: UpdateTarefaDto) {
    return prismaClient.tarefa.update({where: {id}, data: updateTarefaDto});
  }

  remove(id: string) {
    return prismaClient.tarefa.delete({where: {id}});
  }
}
