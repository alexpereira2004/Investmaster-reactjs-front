import ApiService from "../apiservice";

import ErroValidacao from "../exception/ErroValidacao";

export default class MovimentoVendaService extends ApiService {

    constructor() {
        super('/v1/movimento-venda');

    }

    salvar(obj) {
        return this.post('', obj)
    }

    listarComPaginacao(filtro) {
        // let parametros = `listagem-paginado?page=0&size=20&${filtro.tamanho}&sort=id,desc&ativoCodigo=LWSA3`
        let parametros = `/listagem-paginado?page=0&size=20&sort=id,desc`
        return this.get(parametros);

    }
}