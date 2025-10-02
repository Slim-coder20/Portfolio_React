import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import Home from "./components/Home";
import Layout from "./layouts/Layout";
import NotFound from "./pages/NotFound";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects"; 
import Contact from "./pages/Contact"; 

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
