import CaseStudy from "../Components/CaseStudy"
import Footer from "../Components/Footer"


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
                      <video src="/Media/slice1.mp4" autoPlay muted loop preload="metadata" />
                </div>
            </div>
           </div>

           <div className="image-display">
<img src="/Media/1.svg" alt="" loading="lazy" />
             <img src="/Media/2.svg" alt="" loading="lazy" />
             <img src="/Media/3.svg" alt="" loading="lazy" />
             <img src="/Media/4.svg" alt="" loading="lazy" />
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
                        <video src="/Media/slice2.mp4" autoPlay muted loop preload="metadata" />
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
                <img src="/Media/Scroll.svg" alt="" loading="lazy" />
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

                <div className="admin-video">
                    <video src="/Media/Web.mp4" autoPlay muted loop preload="metadata" />
                </div>
           </div>

           <div className="Design-decisions">
                <div className="design-decisions">
                    <div className="title">
                        DESIGN DECISIONS
                    </div>

                    <div className="body">
                        The design leans heavily on structured layouts and visual hierarchy to guide user attention. Key metrics are surfaced early, while supporting information is layered beneath.

    Elements like progress indicators, risk classifications, and timelines were introduced to help users make faster, more informed decisions. These are not just visual components but functional tools that reduce uncertainty.

    The interface avoids unnecessary decoration, focusing instead on clarity and consistency. Every element serves a purpose in helping users understand where they are, what they can do, and what happens next.
                    </div>
                </div>

                <div className="impact">
                    <div className="title">
                        IMPACT
                    </div>

                    <div className="body">
   The resulting experience creates a stronger sense of confidence for investors and a clearer pathway for businesses to access funding. By reducing ambiguity and improving visibility, the platform supports better financial decision-making.

It also establishes a scalable foundation for future growth, allowing additional features and financial instruments to be layered into the system without disrupting the core experience.
                    </div>
                </div>
           </div>

           <div className="more-content">
                <div className="left-left">
                <div className="content-one">
                    <div className="title1">
                        CORE PRODUCT HYPOTHESIS
                    </div>

                    <div className="body1">
                        At the center of the product are a few key assumptions.
The first is that clear and structured financial information increases investor confidence, leading to higher conversion rates.
The second is that reducing cognitive load shortens decision time without sacrificing trust.
The third is that continuous visibility into investments drives long-term engagement and repeat participation.
These hypotheses informed both the experience design and the metrics defined below.
                    </div>
                </div>

                <div className="content-one">
                    <div className="title1">
                        INVESTOR EXPERIENCE METRICS
                    </div>

                    <div className="body1">
The investor experience was evaluated through metrics tied to confidence, clarity, and decision-making efficiency. Key indicators include investment conversion rate, which measures how effectively users move from discovery to commitment, and time to decision, which reflects how quickly users can evaluate opportunities using structured information and risk signals. 

Ongoing engagement is tracked through portfolio interaction frequency, based on the assumption that a clear and informative dashboard encourages users to return, monitor performance, and reinvest over time.
                    </div>
                </div>

                <div className="content-one">
                    <div className="title1">
                        ISSUER EXPERIENCE METRICS
                    </div>

                    <div className="body1">
                        For issuers, success is defined by how efficiently and reliably they can raise capital. This is measured through campaign funding success rate, indicating how many campaigns reach their target, and time to full funding, which reflects how quickly investor participation is secured. 

These metrics are directly influenced by how clearly opportunities are presented, with the expectation that improved transparency and structure will drive higher investor trust and faster funding cycles.
                    </div>
                </div>
                </div>

                {/* <div className="content-right">
                    <img src="/Media/ad-on.svg" alt="" />
                </div> */}
           </div>

           <div className="keyflows">
                    <div className="keyflows-header">
                        <div className="flow-head">
                            KEY FLOWS
                        </div>
                        <div className="flowpiles">
                            <div className="pile1">
                                Funding Flow
                            </div>

                            <div className="pile1">
                                Investment Flow
                            </div>

                            <div className="pile1">
                                Campaign Creation
                            </div>

                            <div className="pile1">
                                Withdrawal Flow
                            </div>
                        </div>

                        <div className="video-cards">
                            <div className="video1">
                                <video src="/Media/a.mp4" autoPlay muted loop preload="metadata"></video>

                                <div className="inner-text">
                                    <div className="innerheader">
                                        FUNDING FLOW
                                    </div>

                                    <div className="innerbody">
                                        <div className="the-text">
                                             Users are able to fund their wallet before joining an investment campaign..
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="video1">
                                <video src="/Media/b.mp4" autoPlay muted loop preload="metadata"></video>

                                <div className="inner-text">
                                    <div className="innerheader">
                                        EXPLORE CAMPAIGNS
                                    </div>

                                    <div className="innerbody">
                                        <div className="the-text">
                                             Users can browse available investment opportunities and view campaign details.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="video1">
                                <video src="/Media/c.mp4" autoPlay muted loop preload="metadata"></video>

                                <div className="inner-text">
                                    <div className="innerheader">
                                        CAMPAIGN MANAGEMENT
                                    </div>

                                    <div className="innerbody">
                                        <div className="the-text">
                                             Users can track campaign performance, manage investor .
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="video1">
                                <video src="/Media/d.mp4" autoPlay muted loop preload="metadata"></video>

                                <div className="inner-text">
                                    <div className="innerheader">
                                        WITHDRAWAL FLOW
                                    </div>

                                    <div className="innerbody">
                                        <div className="the-text">
                                             Users can withdraw funds after maturation date has been met.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
           </div>

           <div className="thelast">
            <div className="last-left">
                <div className="lasthead">
                    Risk, Edge Cases & Failure Scenarios
                </div>

                <div className="lastbody">
                    Designing a financial platform requires planning not just for ideal flows, but for what happens when things go wrong. Several edge cases were considered to ensure the system remains reliable under uncertainty.

This includes scenarios such as failed payments, partially funded campaigns, and repayment defaults. For example, in cases where a campaign does not reach its funding target, the system is designed to clearly communicate outcomes and next steps to both investors and issuers. Similarly, repayment delays are surfaced through structured notifications and status indicators, ensuring transparency rather than ambiguity.

By accounting for these scenarios early, the product is better positioned to handle real-world conditions while maintaining user trust and operational clarity.
                </div>
            </div>

            <div className="last-right">
                <div className="right-head">
                    System Flow & Capital Movement
                </div>

                <div className="right-body">
                    At its core, SLICE is not just an interface but a system that manages the movement of capital between multiple actors. The design reflects this by structuring the product around a clear lifecycle: campaign creation, validation, funding, disbursement, and repayment.

Each stage is interconnected, with the admin layer acting as a control point that ensures compliance and consistency across the system. Investors interact with the platform through discovery and portfolio tracking, while issuers engage through fundraising and repayment management.

This system-level thinking informed how information is structured across the product, ensuring that users are not only able to perform actions, but also understand where they are within the broader financial flow.
                </div>
            </div>
           </div>

            <Footer />

        </div>
    )
}

export default SliceDetails