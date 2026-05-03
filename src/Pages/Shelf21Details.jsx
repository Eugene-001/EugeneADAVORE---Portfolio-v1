import CaseStudy from "../Components/CaseStudy";
import Footer from "../Components/Footer"


function Shelf21Details() {


    return (
        <div>
            <div className="top-section">
                <div className="slice-left">
                    <div className="header-year">
                        <div className="header">
                            SHELF 21
                        </div>

                        <div className="year">
                            PRODUCT DESIGN | 2025
                        </div>
                    </div>

                    <div className="slice-description">
                       Shelf 21 is an all-in-one school operations and communication platform that connects administrators, teachers, parents, and students eliminating fragmented tools and improving visibility across academic and operational workflows.
                    </div>
                </div>

                <div className="slice-right">
                    <div className="video-layer">
                        <video src="/Media/shelf1.mov" autoPlay muted loop />
                    </div>
                </div>
            </div>
        
            <div className="image-display">
                <img src="/Media/01.svg" alt="" />
                <img src="/Media/02.svg" alt="" />
                <img src="/Media/03.svg" alt="" />
                <img src="/Media/04.svg" alt="" />
           </div>

           <div className="the-problem">
            <div className="left-problem">
                <div className="problem-header">
                    THE PROBLEM
                </div>

                <div className="problem-body">
                    Schools and organizations rely on multiple disconnected tools to manage communication, operations, and records. This fragmentation leads to: Lost or hard-to-find information, Inefficient workflows across teams, Poor visibility into student performance ,Weak communication between schools and parents
                </div>
            </div>

            <div className="right-problem">
                <video src="/Media/shelf2.mov" autoPlay muted></video>
            </div>
           </div>

           <div className="thesolution">
                <div className="solution-left">
                    <div className="head-solution">
                        THE SOLUTION
                    </div>

                    <div className="body-solution">
                        Shelf 21 was designed as a unified, role-driven platform that consolidates communication, academic workflows, and operational tools into a single system. By integrating key functions and structuring the experience around distinct user roles, the product ensures that each user interacts with relevant information and actions, reducing complexity while improving efficiency, clarity, and overall usability.
                    </div>
                </div>

                <div className="solution-right">
                    <img src="/Media/image 59.svg" alt="" />
                </div>
           </div>

           <div className="new-purple">
                <div className="purp-left">
                    <div className="web-img">
                        <video src="/Media/side.mp4" alt="" autoPlay muted/>
                    </div>

                    <div className="purple-text">
                        <div className="pur-header">
                            OPERATIONAL EFFIICIENCY THROUGH SYSTEM CONSOLIDATION.
                        </div>

                        <div className="body">
                            The system was designed Shelf 21 as a centralized system to eliminate the need for multiple disconnected tools, improving operational efficiency and reducing friction in day-to-day school activities.
                        </div>
                    </div>
                </div>

                <div className="purp-right">
                    <div className="web-img">
                        <video src="/Media/side2.mp4" alt="" autoPlay muted/>
                    </div>

                    <div className="purple-text">
                        <div className="pur-header">
                            BOOSTING USER ADOPTION WITH ROLE BASED EXPERIENCES
                        </div>

                        <div className="body">
                            The system was designed Shelf 21 as a centralized system to eliminate the need for multiple disconnected tools, improving operational efficiency and reducing friction in day-to-day school activities.
                        </div>
                    </div>
                </div>
           </div>

           <div className="product-scrope">
                <div className="scopeleft">
                    <div className="scope1">
                        <div className="scopehead">
                            PRODUCT SCOPE
                        </div>

                        <div className="scopebody">
                            Shelf 21 was designed as a comprehensive platform that supports both operational and academic workflows within schools and organizations. The product brings together multiple core functions including communication, task management, performance tracking, academic planning, and reporting into a unified system.
                        </div>
                    </div>

                    <div className="scope1">
                        <div className="scopehead">
                            DESIGN SCOPE
                        </div>

                        <div className="scopebody">
                            My role involved designing the end-to-end experience across three core touch points within the ecosystem. I designed the web application as the primary interface for administrators and teachers, focusing on complex workflows such as task management, reporting, academic planning, and communication. I also designed a mobile experience for parents, tailored toward visibility and engagement, enabling them to monitor their child’s progress, receive updates, and communicate with the school. 

                        </div>
                    </div>
                </div>

                <div className="scoperight">
                    <img src="/Media/scope.svg" alt="" />
                </div>
           </div>

           <div className="impactAndOutcomes">
                <div className="impactA">
                    <div className="impactTitle">
                        IMPACT AND OUTCOMES.
                    </div>

                    <div className="impactbody">
                        Shelf 21 is currently live and provides a unified platform for managing school operations, communication, and academic workflows. By consolidating previously fragmented tools into a single system and structuring experiences around distinct user roles, the product improves operational efficiency and reduces friction across daily activities. The platform enables better visibility into tasks, performance, and communication, helping administrators and teachers make more informed decisions while keeping parents actively engaged in their child’s progress.
                    </div>
                </div>

                <div className="impactA">
                    <div className="impactTitle">
                        REFLECTION
                    </div>

                    <div className="impactbody">
                       This project strengthened my ability to design complex, multi-role systems and translate detailed product requirements into structured, intuitive experiences. Designing across web, mobile, and admin platforms pushed me to think beyond individual interfaces and focus on how systems scale and interact. It also reinforced the importance of aligning design decisions with real-world usage ensuring that the product not only works conceptually but delivers practical value in a live environment.
                    </div>
                </div>

                <div className="addon">
                    <img src="/Media/ad-on.svg" alt="" />
                </div>
           </div>

           <Footer/>
        </div>
    )
}

export default Shelf21Details