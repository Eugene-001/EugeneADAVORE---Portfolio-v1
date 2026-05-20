import React from "react";


function Hero () {
    return (
        <div className="hero-section">
            <div className="hero-left">
                <div className="top-intro">
                    Hi there...!
                </div>

                <div className="bottom-intro">
                    This is Eugene A, a designer and frontend engineer passionate about product marketing and user satisfaction. My goal is to create innovative solutions that meet user needs and drive business success.
                </div>
            </div>

            <div className="hero-right">
                <div className="main-hero-interaction-container">

                    <div id="box" className="container-3">
                        <p className="card-text">WEB APP DEVELOPMENT</p>
                        <img src="/Media/Development.svg" alt="" loading="lazy" />
                    </div>

                    <div id="box" className="container-2">
                       <p className="card-text"> MOBILE APP DESIGN</p>
                       <img src="/Media/Mobile.svg" alt="" loading="lazy" />
                    </div>

                    <div id="box" className="container-4">
                        <p className="card-text">WEB APP DESIGN</p>
                        <img src="/Media/Webapp.svg" alt="" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero