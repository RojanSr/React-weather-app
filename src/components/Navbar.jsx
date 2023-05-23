import React from "react";

export default function Navbar() {
  return (
    <nav>
      <a href="/App" className="nav--title">
        Weather.
      </a>
      <a
        href="https://github.com/RojanSr"
        target="_blank"
        className="github-logo"
      >
        <i className="fa-brands fa-github"></i>
      </a>
    </nav>
  );
}
