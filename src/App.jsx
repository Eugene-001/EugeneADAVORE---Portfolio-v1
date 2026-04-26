import React  from "react"
import Navigation from "./Components/Navigation"
import Hero from "./Components/Hero"
import StartupLogo from "./Components/StartupLogo"
import TextandCTA from "./Components/TextandCTA"
import CaseStudy from "./Components/CaseStudy"
import Scroll from "./Components/Scroll"
import Aboutme from "./Components/Aboutme"
import Skillset from "./Components/Skillset"
import Footer from "./Components/Footer"



function App() {

  return (
      <div className="main-area">
        < Navigation/>
        < Hero />
        < StartupLogo />
        < TextandCTA />
        < CaseStudy />
        < Scroll />
        < Aboutme />
        < Skillset />
        < Footer />
      </div>
  )
}

export default App
