import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import gift from "../../src/assets/icons/gift.svg";

export default function Navigation() {
  return (
    <nav className="navbar">
      <Router>
        <ul className="navbar__menu">
          <li>
            <Link to="/" className="navbar__menu__item">
              Dashboard
            </Link>
            <span>/</span>
          </li>
          <li>
            <Link to="/" className="navbar__menu__item">
              Snappet
            </Link>
            <span>/</span>
          </li>
        </ul>
      </Router>
      <h1 className="navbar__title">
        <img className="navbar__title__icon" src={gift} alt="gift box" />
        Front-End Challenge
      </h1>
    </nav>
  );
}
