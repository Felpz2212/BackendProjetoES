import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuariosTarefaDto } from './create-usuarios-tarefa.dto';

export class UpdateUsuariosTarefaDto extends PartialType(CreateUsuariosTarefaDto) {}
