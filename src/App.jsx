import React  from "react"
import Navigation from "./Components/Navigation"
import Hero from "./Components/Hero"
import StartupLogo from "./Components/StartupLogo"
import TextandCTA from "./Components/TextandCTA"
import CaseStudy from "./Components/CaseStudy"
import Scroll from "./Components/Scroll"



function App() {

  return (
      <div className="main-area">
        < Navigation/>
        < Hero />
        < StartupLogo />
        < TextandCTA />
        < CaseStudy />
        < Scroll />
      </div>
  )
}

export default App
