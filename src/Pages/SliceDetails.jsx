import CaseStudy from "../Components/CaseStudy"


function SliceDetails() {
    return (
        <div>
           <div className="top-section">
            <div className="slice-left">
                <div className="header-year">
                    <div className="header">
                        SLICE FINANCE
                    </div>

                    <div className="year">
                        PRODUCT DESIGN | 2026
                    </div>
                </div>

                <div className="slice-description">
                    SLICE Finance is a digital investment platform designed to connect investors seeking structured returns with businesses in need of capital. The product is positioned not just as a transaction tool, but as a system for long-term financial growth.
                </div>
            </div>

            <div className="slice-right">
                <div className="video-layer">
                      <video src="/Media/slice1.mov" autoPlay muted loop />
                </div>
            </div>
           </div>

           <div className="image-display">
            <img src="/Media/1.svg" alt="" />
            <img src="/Media/2.svg" alt="" />
            <img src="/Media/3.svg" alt="" />
            <img src="/Media/4.svg" alt="" />
           </div>

             <div className="top-section">
                <div className="slice-left">
                    <div className="header-year">
                        <div className="header">
                            PRODUCT THINKING
                        </div>

                        <div className="pt-description">
                            Rather than approaching SLICE as a typical fintech app, I framed it as a structured financial system. Every interaction was designed to answer a simple but critical question: “Can I trust this with my money?” This led to a focus on clarity over complexity, data as a decision tool, and trust as a core UX layer rather than a visual afterthought.
                        </div>
                    </div>


                </div>

                <div className="slice-new-right">
                    <div className="video-layer">
                        <video src="/Media/slice2.mov" autoPlay muted loop />
                    </div>
                </div>
           </div>

           <div className="purple-scrobbable">
            <div className="purple-left">
                <div className="purple-LT">
                    <div className="PH">
                        ISSUER EXPERIENCE
                    </div>
                    <div className="PB">
                        For businesses seeking funding, the platform provides a structured path from campaign creation to capital disbursement. Issuers can submit opportunities, track fundraising progress, and manage investor participation.
                    </div>
                </div>

                <div className="purple-LB">
                    <div className="PH">
                        INVESTOR EXPERIENCE
                    </div>
                    <div className="PB">
                        For businesses seeking funding, the platform provides a structured path from campaign creation to capital disbursement. Issuers can submit opportunities, track fundraising progress, and manage investor participation.
                    </div>
                </div>
            </div>

            <div className="purple-right">
                <img src="/Media/Scroll.svg" alt="" />
            </div>
           </div>

           <div className="admin-system">
                <div className="admin-header-body">
                    <div className="admin-header">
                        ADMIN SYSTEM
                    </div>

                    <div className="admin-body">
                        At the core of SLICE is a powerful admin layer that governs the entire ecosystem. This system handles campaign approvals, risk assessments, fund disbursement, and repayment tracking.
                    </div>
                </div>
           </div>
        </div>
    )
}

export default SliceDetails