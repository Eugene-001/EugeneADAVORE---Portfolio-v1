import { Link } from "react-router-dom";

function Scroll() {
    return (
        <div className="scroll">
            <div className="left">
                <div className="left-header">
                    BUILDING ACROSS INDUSTRIES
                </div>

                <div className="left-body">
                    I'm a designer and frontend engineer passionate about product marketing and user satisfaction. My goal is to create innovative solutions that meet user needs and drive business success.
                </div>
            </div>

            <div className="right">
                <div className="right1">
                    <div className="rightImg">
                        <img src="Media/right1.svg" alt="" />
                    </div>

                    <div className="headBody">
                        <div className="head">
                            FINANCE
                        </div>

                        <div className="bod">
                            See the projects designed for the financial technology ecosystem -  SLICE, SLOT Finance, Simplified Payroll.
                        </div>
                    </div>
                </div>

                <div className="right2">
                    <div className="rightImg">
                        <img src="Media/right2..svg" alt="" />
                    </div>

                    <div className="headBody">
                        <div className="head">
                            CAPTSTONE
                        </div>

                        <div className="bod">
                            An education platform to help intending product managers get a better understanding of the work environment of fulltime product managers.
                        </div>
                    </div>
                </div>

                <div className="right3">
                   <Link to="/Pages/NJFP" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="rightImg">
                            <img src="Media/right3.svg" alt="" />
                        </div>

                        <div className="headBody">
                            <div className="head">
                                UNDP NIGERIA - NJFP 2.0
                            </div>

                            <div className="bod">
                                Also see other projects designed for the Nigerian Government and Associated projects - KDBS, NNVS, HEFA.
                            </div>
                        </div>
                   </Link>
                </div>
            </div>
        </div>
    )
}

export default Scroll