import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosProjetosController } from './usuarios-projetos.controller';
import { UsuariosProjetosService } from './usuarios-projetos.service';

describe('UsuariosProjetosController', () => {
  let controller: UsuariosProjetosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuariosProjetosController],
      providers: [UsuariosProjetosService],
    }).compile();

    controller = module.get<UsuariosProjetosController>(UsuariosProjetosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
