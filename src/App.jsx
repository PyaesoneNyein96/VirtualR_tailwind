import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
// import HeroSection from "./components/HeroSection/HeroSection";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home";
import FeatureSection from "./components/Features/FeatureSection";
import Footer from "./components/Footer/Footer";
import Workflow from "./components/Workflow/Workflow";


const App = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <>
      <Router>
      <Navbar />
        <div className="max-w-7xl mx-auto pt-10 px-6 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<FeatureSection />} />
            <Route path="/workflow" element={<Workflow />} />
          </Routes>
      </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
