import React from "react";
import logo from "../assets/logo.png";

export const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-white">
      <a className="navbar-brand me-5" href="#">
        <img
          src={logo}
          width="48.12"
          height="45.39"
          className="d-inline-block align-middle"
          alt=""
        />
        <span className="text-dark absolute fs-3">
          <strong style={{ color: "#FFAA00" }}>G</strong>
          <span style={{ color: "#FFE55E" }}>local</span>
        </span>
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className={`nav-item me-4 ${activeTab === "Home" ? "active-tab" : ""}`}>
            <a
              className="nav-link text-dark"
              href="#"
              onClick={() => setActiveTab("Home")}
            >
              Home
            </a>
          </li>
          <li className={`nav-item me-4 ${activeTab === "Categories" ? "active-tab" : ""}`}>
            <a
              className="nav-link text-dark"
              href="#"
              onClick={() => setActiveTab("Categories")}
            >
              Categories
            </a>
          </li>
          <li className={`nav-item me-4 ${activeTab === "About Us" ? "active-tab" : ""}`}>
            <a className="nav-link text-dark" href="#">
              About Us
            </a>
          </li>
          <li className={`nav-item me-4 ${activeTab === "Products" ? "active-tab" : ""}`}>
            <a className="nav-link text-dark" href="#">
              Products
            </a>
          </li>
          <li className={`nav-item me-4 ${activeTab === "Pet Care" ? "active-tab" : ""}`}>
            <a className="nav-link text-dark" href="#">
              Pet Care
            </a>
          </li>
          <li className={`nav-item me-4 ${activeTab === "Contact" ? "active-tab" : ""}`}>
            <a className="nav-link text-dark" href="#">
              Contact
            </a>
          </li>
        </ul>

        <div className="d-flex mx-4">
          <button type="button" className="btn sigin-btn px-3 me-4">
            Sign In
          </button>
          <button type="button" className="btn px-3 register-btn">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};
