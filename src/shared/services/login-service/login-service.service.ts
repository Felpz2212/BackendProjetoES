import { Injectable } from '@nestjs/common';
import { loginModel } from 'src/shared/models/loginModel';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class LoginServiceService {

    constructor( private readonly usuarioService: UsuariosService ) { }

    async login(email: string, senha: string){

        console.log(senha)

        let usuario = await this.usuarioService.findByEmail(email);
        console.log(usuario)
        let data: loginModel;
        console.log('entrou aqui')
        if(usuario.senha == senha){
            data = {
                nome: usuario.nome,
                email: usuario.email,
                username: usuario.username
            }

            console.log('criou o data')
        }
        console.log(data);
        return data;
    }
}
