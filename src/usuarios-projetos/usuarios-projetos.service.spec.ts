import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosProjetosService } from './usuarios-projetos.service';

describe('UsuariosProjetosService', () => {
  let service: UsuariosProjetosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuariosProjetosService],
    }).compile();

    service = module.get<UsuariosProjetosService>(UsuariosProjetosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
