import { PartialType } from '@nestjs/mapped-types';
import { CreateProjetoDto } from './create-projeto.dto';

export class UpdateProjetoDto extends PartialType(CreateProjetoDto) {

    nome?: string;
    descricao?: string;
    publico?: boolean;
    id_user_dono?: string;
}
