import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosTarefasController } from './usuarios-tarefas.controller';
import { UsuariosTarefasService } from './usuarios-tarefas.service';

describe('UsuariosTarefasController', () => {
  let controller: UsuariosTarefasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuariosTarefasController],
      providers: [UsuariosTarefasService],
    }).compile();

    controller = module.get<UsuariosTarefasController>(UsuariosTarefasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
