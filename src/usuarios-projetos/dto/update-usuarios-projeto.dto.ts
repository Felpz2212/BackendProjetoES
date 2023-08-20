import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuariosProjetoDto } from './create-usuarios-projeto.dto';

export class UpdateUsuariosProjetoDto extends PartialType(CreateUsuariosProjetoDto) {}
