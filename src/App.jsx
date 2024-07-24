import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
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
    <Slide />
    <hr className="border-lightGrey border my-16 ml-10 w-16" />
    <Welcome />
    <Small />
    <Featured />
  </>
);

function App() {
  return (
    <Router>
      <div className="font-leagueSpartan sm:ml-[164px]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
