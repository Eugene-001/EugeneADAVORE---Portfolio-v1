import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function AutoPlayVideo({ src, poster, className, style }) {
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        // Attempt to play now (muted allows autoplay in most browsers)
        node.play().catch(() => {});

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        node.play().catch(() => {});
                    } else {
                        node.pause();
                    }
                });
            },
            { threshold: 0.25 }
        );

        io.observe(node);

        return () => {
            io.unobserve(node);
            io.disconnect();
        };
    }, []);

    return (
        <video
            ref={ref}
            src={src}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className={className}
            style={style}
        />
    );
}

function CaseStudy() {
    return (
        <div className="casestudy">
            <div className="top-layer">
                <Link to="/pages/SliceDetails" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="top-left">
                        <div className="image">
                            <img src="Media/SLICE.gif" alt="" loading="lazy" />
                        </div>

                        <div className="headerAndBody">
                            <div className="casestudyheader">
                                SLICE FINANCE
                            </div>
                            <div className="casestudybody">
                                Slice is a crowdfunding product that allows businesses to raise funds while at the same time helping individuals to invest and make money for themselves.
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/pages/Shelf21Details" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="top-right">
                    <div className="image">
                        <img src="Media/Shelf21.gif" alt="" loading="lazy" />
                    </div>

                    <div className="headerAndBody">
                        <div className="casestudyheader">
                            SHELF 21
                        </div>
                        <div className="casestudybody">
                            An Edu-tech platform built to monitor school and student activities as well as an app <br />for parents to track progress.
                        </div>
                    </div>
                </div>
                </Link>
            </div>

            <div className="bottom-layer">

                
                    <div className="website-titles">
                        <div className="forwebsite">
                            <div className="this-layer">
                                WEBSITES AND LANDING PAGES
                            </div>

                            <div className="layerbody">
                                See some of the website and landing page designs I have worked on.
                            </div>
                        </div>

                        
                      <Link to="/Pages/Landingpages" style={{textDecoration: "none", color: "inherit"}}>
                        <div className="websitebtn">
                            <div className="itsbutton">
                                <Button text="View Websites"/>
                            </div>
                        </div>
                        </Link>
                    </div>

                    <div className="thebuilds">

                        <div className="layer1">
                            <div className="imageDiv">
                                <AutoPlayVideo src="/Media/synthera.mp4" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                            </div>
                            <div className="titleDiv">
                                <div className="Title">
                                    SYNTHERA FELLOWSHIP
                                </div>
                                <div className="bodyDiv">
                                    Landing page for Synthera Fellowship.
                                </div>
                            </div>
                        </div>

                        <div className="layer1">
                            <div className="imageDiv">
                                <AutoPlayVideo src="/Media/Ledger.mp4" poster="/Media/Ledger.mp4" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                            </div>
                            <div className="titleDiv">
                                <div className="Title">
                                    LEDGER
                                </div>
                                <div className="bodyDiv">
                                    Landing page for Ledger.
                                </div>
                            </div>
                        </div>

                        <div className="layer1">
                            <div className="imageDiv">
                                <AutoPlayVideo src="/Media/Flowcheck.mp4" poster="/Media/Slice.svg" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                            </div>
                            <div className="titleDiv">
                                <div className="Title">
                                    FLOWCHECK
                                </div>
                                <div className="bodyDiv">
                                    Landing page for Flowcheck.
                                </div>
                            </div>
                        </div>

                    </div>
                
                
            </div>
        </div>
    )
}

export default CaseStudy