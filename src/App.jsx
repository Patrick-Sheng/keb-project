import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";

const layout = {
  app: {
    minHeight: "100vh",
    background:
      "radial-gradient(1200px 600px at 80% -20%, rgba(68,189,240,.15) 0%, rgba(68,189,240,0) 60%), #0b1b34",
  },
  nav: {
    display: "flex",
    gap: 16,
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: 1100,
    margin: "0 auto",
    padding: 16,
    borderBottom: "1px solid rgba(255,255,255,.08)",
    position: "sticky",
    top: 0,
    backdropFilter: "saturate(140%) blur(8px)",
    background: "rgba(11,27,52,.85)",
    color: "#eef2f7",
  },
  links: { display: "flex", gap: 12 },
};

export default function App() {
  return (
    <BrowserRouter>
      <div style={layout.app}>
        <nav style={layout.nav}>
          <strong>KEB</strong>
          <div style={layout.links}>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/events">Events</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
