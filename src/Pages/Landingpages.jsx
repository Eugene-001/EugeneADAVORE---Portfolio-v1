import react from 'react'
import Footer from "../Components/Footer"

function Landingpages () {
    return (
        <div>
           <div className="landingpageVideos">

            <div className="landing1">
                <video src="/Media/newsynthera.mp4" autoPlay muted></video>
            </div>

            <div className="landing1">
                <video src="/Media/Flowcheck.mp4" autoPlay muted></video>
            </div>

            <div className="landing1">
                <video src="/Media/pmhelp.mp4" autoPlay muted></video>
            </div>

            <div className="landing1">
                <video src="/Media/Ledger.mp4" autoPlay muted></video>
            </div>

           </div>

           <Footer/>
        </div>
    )
}

export default Landingpages