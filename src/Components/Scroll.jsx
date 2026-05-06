import { Link } from "react-router-dom";
import Button from "./Button";

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

                <div className="right3">
                   <Link to="/Pages/NJFP" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="rightImg">
                            <img src="Media/nfjpimage.svg" alt="" />
                        </div>

                        <div className="headBody">
                            <div className="head">
                                UNDP NIGERIA - NJFP 2.0
                            </div>

                            <div className="bod">
                                Also see other projects designed for the Nigerian Government and Associated projects - KDBS, NNVS, HEFA.
                            </div>

                            <div className="butt">
                                <Button text="View more"/>
                            </div>
                        </div>
                   </Link>
                </div>

                <div className="right2">
                   <Link to="/Pages/NJFP" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="rightImg2">
                            <img src="Media/SLOT..svg" alt="" />
                        </div>

                        <div className="headBody2">
                            <div className="head">
                               SLOT FINANCE
                            </div>

                            <div className="bod2">
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