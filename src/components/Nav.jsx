import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="nav--container">
      <img
        src="../src/assets/browser.png"
        className="browser--logo"
        alt="browser-logo"
      />
      <p className="nav--title">my travel is journal</p>
    </nav>
  );
}
