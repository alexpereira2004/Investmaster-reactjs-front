import React from "react"

import {HashRouter, Route, Switch} from "react-router-dom"
import MovimentosVenda from "../views/MovimentosVenda";

function Rotas(props) {
    return(
        <HashRouter>
            <Switch>
                <Route path="/movimentos-venda" component={MovimentosVenda} />
            </Switch>
        </HashRouter>
    )
}

export default Rotas