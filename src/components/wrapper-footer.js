import React from "react";

class WrapperFooter extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text-left mb-0">Copyright <i className="far fa-copyright"></i> <span
                                id="copyright-year"></span> InvestMaster. All rights reserved</p>
                        </div>
                        <div className="col-md-6 d-none d-md-block">
                            <p className="text-right mb-0">
                                <i className="fa fa-mail-bulk"></i> alexpereira2004@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WrapperFooter