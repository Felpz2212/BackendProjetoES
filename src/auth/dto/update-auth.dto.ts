import { PartialType } from '@nestjs/mapped-types';
import { loginDTO } from './loginDTO';

export class UpdateAuthDto extends PartialType(loginDTO) {}
