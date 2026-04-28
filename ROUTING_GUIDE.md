# How to Add Routing to Your Portfolio

## Prerequisites

Install react-router-dom:
```bash
npm install react-router-dom
```

---

## Step 1: Set Up App.jsx

Wrap your app in a `<BrowserRouter>` and add `<Routes>` with `<Route>` for each page.

Example:

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <StartupLogo />
              <TextandCTA />
              <CaseStudy />
              <Scroll />
              <Aboutme />
              <Skillset />
              <Footer />
            </>
          } />
          <Route path="/case-study/:id" element={<CaseStudyDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```

---

## Step 2: Create a Detail Page Component

Create a new file at `src/Pages/CaseStudyDetail.jsx`:

```jsx
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CaseStudyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>Back</button>
      <h1>Case Study: {id}</h1>
    </div>
  );
}

export default CaseStudyDetail;
```

---

## Step 3: Make Case Studies Clickable

In `CaseStudy.jsx`, import Link and wrap your case study cards:

```jsx
import { Link } from "react-router-dom";

function CaseStudy() {
  return (
    <div>
      <Link to="/case-study/slice">
        <div className="case-study-card">
          <img src="Media/SLICE.gif" alt="" />
          <h3>SLICE FINANCE</h3>
        </div>
      </Link>

      <Link to="/case-study/shelf21">
        <div className="case-study-card">
          <img src="Media/Shelf21.gif" alt="" />
          <h3>SHELF 21</h3>
        </div>
      </Link>

      {/* Add more case studies as needed */}
    </div>
  );
}

export default CaseStudy;
```

---

## Step 4: Handle Dynamic Routes (Optional)

To show different content based on the URL id:

```jsx
import { useParams } from "react-router-dom";

const caseStudies = {
  slice: { title: "SLICE FINANCE", description: "Description here" },
  shelf21: { title: "SHELF 21", description: "Description here" },
  // add more
};

function CaseStudyDetail() {
  const { id } = useParams();
  const study = caseStudies[id];

  if (!study) return <div>Case study not found</div>;

  return (
    <div>
      <h1>{study.title}</h1>
      <p>{study.description}</p>
    </div>
  );
}
```

---

## Routes Summary

| URL | Page |
|-----|------|
| `/` | Home (all sections) |
| `/case-study/slice` | Slice detail page |
| `/case-study/shelf21` | Shelf21 detail page |
| `/case-study/synthera` | Synthera detail page |
| `/case-study/ledger` | Ledger detail page |
| `/case-study/flowcheck` | Flowcheck detail page |

---

## Your Current App.jsx Setup

Below is the corrected routing code based on your current App.jsx:

```jsx
import React from "react"
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
      <Navigation />
      <Routes>
        <Route path="/" element={
          <>
            <div className="main-area">
              <Hero />
              <StartupLogo />
              <TextandCTA />
              <CaseStudy />
              <Scroll />
              <Aboutme />
              <Skillset />
              <Footer />
            </div>
          </>
        } />
        <Route path="/pages/SliceDetails" element={<SliceDetails />} />
        <Route path="/pages/Shelf21Details" element={<Shelf21Details />} />
      </Routes>
    </Router>
  )
}
```

**Note:** Your `path="/slice/:id"` uses a dynamic route. Update the Routes Summary table above to match this pattern for your case studies.