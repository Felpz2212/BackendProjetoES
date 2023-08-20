export class CreateTarefaDto {

    nome: string;
    descricao: string;
    publica: boolean;
    data_inicial: Date;
    data_final: Date;
    id_status: string;
    id_projeto:string;
}
