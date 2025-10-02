import React from "react";
import { Routes, Route, outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { About } from "./pages/About";
import Home from "./components/Home";
import Layout from "./layouts/Layout";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Route>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contanct />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
  );
}
