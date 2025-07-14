import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Intro from "./components/Intro";
import Latestwork from "./components/Latestwork";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Social from "./components/Social";
import Tech from "./components/Tech";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import Blog from "./components/Blog";
import Testimonial from "./components/Testimonial";
import Inprogress from "./components/Inprogress";
import MouseEffect from "./components/MouseEffect";

function App() {
  const [isDark, setIsDark] = useState(false);

  // Check for dark mode preference in localStorage or default to system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <div className={`dark:bg-slate-900 bg-black`}>
        <Router>
          <div className="relative min-h-screen flex flex-col ">
           <MouseEffect />
            {/* Navbar */}
            <Navbar />

            
            {/* Dark Mode Toggle */}
            {/* <button
              onClick={toggleDarkMode}
              className="fixed z-50 md:top-6 top-2 right-40 md:right-[48%] p-2 rounded"
            >
              {isDark?  <FontAwesomeIcon
                              icon={faToggleOn} className="text-green-500 text-4xl"
                            />: <FontAwesomeIcon
                              icon={faToggleOff} className="text-red-500 bg-green text-4xl "
                            />}
             
            </button> */}

            {/* Social Links - Fixed position */}
            <div className="fixed top-[35%] right-0 z-50">
              <Social />
            </div>

            {/* Main Content */}
            <div className="flex-grow">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Intro />
                      <Tech />
                      <Latestwork />
                      <Testimonial/>
                    </>
                  }
                />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/inprogress" element={<Inprogress />} />
              </Routes>
            </div>

            {/* Footer */}
            <Footer />
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
