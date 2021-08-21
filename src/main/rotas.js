import React from "react"

import {HashRouter, Route, Switch} from "react-router-dom"
import Home from "../views/home";
import MovimentosVenda from "../views/movimentosVenda";

function Rotas(props) {
    return(
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/movimentos-venda" component={MovimentosVenda} />
            </Switch>
        </HashRouter>
    )
}

export default Rotas