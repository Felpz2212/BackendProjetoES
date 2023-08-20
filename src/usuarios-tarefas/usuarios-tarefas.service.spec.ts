import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosTarefasService } from './usuarios-tarefas.service';

describe('UsuariosTarefasService', () => {
  let service: UsuariosTarefasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuariosTarefasService],
    }).compile();

    service = module.get<UsuariosTarefasService>(UsuariosTarefasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
