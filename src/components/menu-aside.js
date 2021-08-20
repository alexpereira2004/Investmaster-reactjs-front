import React from "react";

class MenuAside extends React.Component {
    render() {
        return(
            <div className="aside">
                <div className="aside-header">
                    <h3 className="aside-title">InvestMaster</h3>
                    <div className="aside-addon">
                        <button className="btn btn-label-primary btn-icon btn-lg" data-toggle="aside">
                            <i className="fa fa-times aside-icon-minimize"></i>
                            <i className="fa fa-thumbtack aside-icon-maximize"></i>
                        </button>
                    </div>
                </div>
                <div className="aside-body" data-simplebar>
                    <div className="menu">
                        <div className="menu-section">
                            <div className="menu-section-icon">
                                <i className="fa fa-ellipsis-h"></i>
                            </div>
                            <h2 className="menu-section-text">Histórico</h2>
                        </div>

                        <div className="menu-item">
                            <button className="menu-item-link menu-item-toggle">
                                <div className="menu-item-icon">
                                    <i className="fa fa-credit-card"></i>
                                </div>
                                <span className="menu-item-text">Movimentos</span>
                                <div className="menu-item-addon">
                                    <i className="menu-item-caret caret"></i>
                                </div>
                            </button>

                            <div className="menu-submenu">
                                <div className="menu-item">
                                    <a href="#/movimentos-compra"
                                       className="menu-item-link">
                                        <i className="menu-item-bullet"></i>
                                        <span className="menu-item-text">Compra</span>
                                    </a>
                                </div>
                                <div className="menu-item">
                                    <a href="#/movimentos-venda" className="menu-item-link">
                                        <i className="menu-item-bullet"></i>
                                        <span className="menu-item-text">Venda</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuAside