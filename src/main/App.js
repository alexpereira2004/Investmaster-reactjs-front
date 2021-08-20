import '../App.css';
import React from "react";

import MenuAside from "../components/menu-aside";
import Wrapper from "../components/wrapper";

import 'bootswatch/dist/cosmo/bootstrap.css'


class App extends React.Component {

  render() {
    return(
        <>
            <div className="holder">
                <MenuAside />
                <Wrapper />
            </div>
            <div className="scrolltop">
                <button className="btn btn-info btn-icon btn-lg">
                    <i className="fa fa-angle-up"></i>
                </button>
            </div>
        </>
    )
  }
}

export default App;
