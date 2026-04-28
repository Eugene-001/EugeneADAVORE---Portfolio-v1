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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SliceDetails from "./Pages/SliceDetails"
import Shelf21Details from "./Pages/Shelf21Details"



function App() {

  return (
      <Router>
         < Navigation/>
          <Routes>
            <Route path="/" element= {
              <>
            <div className="main-area">
              < Hero />
              < StartupLogo />
              < TextandCTA />
              < CaseStudy />
              < Scroll />
              < Aboutme />
              < Skillset />
              < Footer />
            </div>
              </>
             } />
             <Route path="/" element={<Navigation />} />
             <Route path="Pages/SliceDetails" element={<SliceDetails />} />
             <Route path="Pages/Shelf21Details" element={<Shelf21Details />} />
          </Routes>
      </Router>
  )
}

export default App


