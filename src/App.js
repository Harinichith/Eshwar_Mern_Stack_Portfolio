import React from "react";
import { Routes, Route } from "react-router-dom"; // Correct way to use Routes and Route

import Navbar from "./components/navbar"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Education from "./pages/Education"; // Ensure this is imported

const App = () => {
  return (
    <>
      <Navbar /> {/* Include the Navbar */}
      <Routes>
        {/* Define Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} /> {/* Education route */}
      </Routes>
    </>
  );
};

export default App;
