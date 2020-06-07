import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ReactComponent as IconGift } from "../assets/icons/gift.svg";

export default function Navigation() {
  return (
    <nav className="navbar">
      <Router>
        <ul className="navbar__breadcrumb">
          <li className="navbar__breadcrumb__item">
            <Link to="/">Dashboard</Link>
            <span> / </span>
          </li>
          <li className="navbar__breadcrumb__item">
            <Link to="/">Snappet</Link>
            <span> / </span>
          </li>
        </ul>
      </Router>
      <h1 className="navbar__title">
        <IconGift />
        Front-End Challenge
      </h1>
    </nav>
  );
}
