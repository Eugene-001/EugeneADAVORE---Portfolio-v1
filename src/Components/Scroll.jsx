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

                <div className="firstCase">
                            <div className="caseimage">
                                <img src="/Media/right3.svg" alt="" loading="lazy" />
                            </div>

                            <div className="caseText">
                                <div className="CaseTitle">
                                    UNDP NIGERIA - NJFP 2.0
                                </div>

                                <div className="caseBody">
                                    Also see other projects designed for the Nigerian Government and Associated projects - KDBS, NNVS, HEFA.
                                </div>

                                <Link to="/Pages/NJFP" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="button">
                                        <Button text="View Casestudy"/>
                                    </div>
                                </Link>

                            </div>
                </div>

                <div className="secondCase">
                        <div className="caseimage2">
                            <img src="/Media/SLOT..svg" alt="" loading="lazy" />
                        </div>

                        <div className="caseText2">
                            <div className="CaseTitle2">
                                FINANCE
                            </div>

                            <div className="caseBody2">
                                See the projects designed for the financial technology ecosystem -  SLICE, SLOT Finance, Simplified Payroll.
                            </div>

                        
                        </div>
                </div>

                
                <div className="secondCase">
                        <div className="caseimage2">
                            <img src="/Media/capstone.svg" alt="" loading="lazy" />
                        </div>

                        <div className="caseText2">
                            <div className="CaseTitle2">
                                SAAS
                            </div>

                            <div className="caseBody2">
                                See the projects designed for Softwares as a Service (SAAS) and associated products - Abache, Capstone, Shelf 21
                            </div>

                    

                        
                        </div>
                </div>

            </div>
        </div>
    )
}

export default Scroll