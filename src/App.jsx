import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro";
import Latestwork from "./components/Latestwork";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Social from "./components/Social";
import Tech from "./components/Tech";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Router>
        <div className="relative">
          {/* Navbar is persistent */}
          <Navbar />

          {/* Social Links - Fixed position */}
          <div className="fixed top-[35%] right-0 z-50">
            <Social />
          </div>

          {/* Main Routes */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Intro />
                  <Tech />
                  <Latestwork />
                  
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          {/* Footer can be included only on certain pages */}
        </div>
      </Router>
    </>
  );
}

export default App;
