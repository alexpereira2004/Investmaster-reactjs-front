import React from "react";
import MovimentoVendaService from "../app/service/movimentoVendaService";
import * as messages from "../components/toastr";

class MovimentosVenda extends React.Component {

    constructor(props) {
        super(props);
        this.service = new MovimentoVendaService();
    }


    state = {
        ano: '',
        mes: '',
        tipo: '',
        descricao: '',
        showConfirmDialog: false,
        lancamentoDeletar: {},
        content : []
    }

    componentDidMount(){
        const params = this.props.match.params

        const filtro = {
            page: 0,
            size: 20
        }

        this.service.listarComPaginacao(filtro)

            .then(response => {
                const lista = response.data;
                // console.log(lista);
                this.setState({ content: lista.content });
            })
            .catch(erros => {
                messages.mensagemErro(erros.response.data)
            })

    }



    render() {
        return(
            <>
                Movimento vendas carregado
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>DataAquisicao</td>
                            <td>PrecoPago</td>
                            <td>Quantidade</td>
                            <td>TotalInvestido</td>
                            <td>DataVenda</td>
                            <td>PrecoVenda</td>
                            <td>TotalFinal</td>
                            <td>Rendimento</td>
                            <td>AtivoNome</td>
                            <td>AtivoCodigo</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.content.map(e => {
                                return(
                                    <tr>
                                        <td>{e.id}</td>
                                        <td>{e.dataAquisicao}</td>
                                        <td>{e.precoPago}</td>
                                        <td>{e.quantidade}</td>
                                        <td>{e.totalInvestido}</td>
                                        <td>{e.dataVenda}</td>
                                        <td>{e.precoVenda}</td>
                                        <td>{e.totalFinal}</td>
                                        <td>{e.rendimento}</td>
                                        <td>{e.ativoNome}</td>
                                        <td>{e.ativoCodigo}</td>
                                    </tr>)
                                })
                        }
                    </tbody>
                </table>
            </>
        )
    }
}

export default MovimentosVenda