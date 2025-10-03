import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";

export default function Layout() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col ${
        isDark ? "bg-slate-950" : "bg-slate-50"
      }`}
    >
      <Nav />
      <main
        className={`flex-1 ${
          isDark
            ? [
                "text-slate-300",
                "[&_p]:text-slate-300",
                "[&_h1]:text-slate-100",
                "[&_h2]:text-slate-100",
                "[&_h3]:text-slate-100",
                "[&_h4]:text-slate-100",
                "[&_h5]:text-slate-100",
                "[&_h6]:text-slate-100",
              ].join(" ")
            : [
                "text-black",
                "[&_p]:text-black",
                "[&_h1]:text-black",
                "[&_h2]:text-black",
                "[&_h3]:text-black",
                "[&_h4]:text-black",
                "[&_h5]:text-black",
                "[&_h6]:text-black",
              ].join(" ")
        }`}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
