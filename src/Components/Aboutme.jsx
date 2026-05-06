import Button from "./Button";

function Aboutme() {
    return (
        <div className="theAbout">
            <div className="about-section">
                <div className="about">
                    About Me
                </div>

                <div className="about-body">
                    I'm a designer and frontend engineer passionate about product marketing and user satisfaction. <br />My goal is to create innovative solutions that meet user needs and drive business success. <br />

                    Over the years I have been involved in a lot beyond pushing pixels and writing code. <br /> Giving back to the community, hosting events and sessions for educational purposes has always been something I am passionate about.
                </div>

                <div className="buttons">
                    <Button text="My Resume" link="/Media/Resume.pdf" />

                    <Button text="Get in touch" link="/Media/Resume.pdf" />
                </div>
            </div>
        </div>
    )
}

export default Aboutme;