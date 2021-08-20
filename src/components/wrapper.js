import React from "react";

import WrapperHeader from "./wrapper-header";
import WrapperContent from "./wrapper-content";
import WrapperFooter from "./wrapper-footer";

class Wrapper extends React.Component {
    render() {
        return (
            <>
                <div className="wrapper">
                    <WrapperHeader />
                    <WrapperContent />
                    <WrapperFooter />
                </div>
            </>
        )
    }
}

export default Wrapper