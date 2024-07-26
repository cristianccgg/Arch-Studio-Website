import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { Slide } from "./components/Slide";
import { Welcome } from "./components/Welcome";
import { Small } from "./components/Small";
import { Featured } from "./components/Featured";
import { Footer } from "./components/Footer";
import { Portfolio } from "./components/Portfolio";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

const Home = () => (
  <>
    <div className="relative">
      <div className="hidden sm:flex gap-5 text-lightGrey items-center rotate-90 absolute -top-12 -left-44">
        <hr className="w-[104px]" />
        <h1 className="tracking-[18px]">HOME</h1>
      </div>
    </div>
    <Slide />
    <hr className="border-lightGrey border my-16 ml-10 w-16 sm:hidden" />
    <Welcome />
    <Small />
    <Featured />
  </>
);

function App() {
  return (
    <Router>
      <div className="relative font-leagueSpartan sm:px-[98px] lg:px-[165px] max-w-[1440px] mx-auto overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
