import React from "react";
import { Link } from "react-router-dom";
import instagramIcon from "../images/footer/instagram.png";
import linktreeIcon from "../images/footer/linktree.png";

const Footer = () => {
  return (
    <footer className="bg-black text-light py-4 mt-auto">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        
        {/* Navigation Links */}
        <div className="mb-3 mb-md-0">
          <Link to="/" className="text-light text-decoration-none me-3">
            HomePage
          </Link>
          <Link to="/about" className="text-light text-decoration-none me-3">
            AboutUs
          </Link>
          <Link to="/events" className="text-light text-decoration-none">
            Events
          </Link>
        </div>

        {/* Social Icons */}
        <div>
          <a
            href="https://www.instagram.com/uoa.keb/"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3"
          >
            <img
              src={instagramIcon}
              alt="Instagram"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
          <a
            href="https://linktr.ee/kebuoa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linktreeIcon}
              alt="Linktree"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;