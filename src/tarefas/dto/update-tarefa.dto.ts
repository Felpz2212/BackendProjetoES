import { PartialType } from '@nestjs/mapped-types';
import { CreateTarefaDto } from './create-tarefa.dto';

export class UpdateTarefaDto extends PartialType(CreateTarefaDto) {

    nome?: string;
    descricao?: string;
    publica?: boolean;
    data_inicial?: Date;
    data_final?: Date;
    id_status?: string;
}
