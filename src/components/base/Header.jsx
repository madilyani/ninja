import React, { useState, useEffect } from "react";
export default function Header(props) {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);
  const start = 500;
  const onScroll = () => {
    if (window.scrollY > start) {
      document.getElementById("header").classList.add("sticky");
    } else {
      document.getElementById("header").classList.remove("sticky");
    }
  };
  return (
    <header className="header" id="header">
      <div className="auto__container">
        <div className="header__inner">
          <a href="#intro" className="header__inner-logo">
            G4K1DAO
          </a>
          <nav className={"nav " + (menu ? "active" : "")} id="menu">
            <div className="nav__inner">
              <div className="nav__inner-links">
                <a href="#about" className="nav__inner-link">
                  About
                </a>
                <a href="#dao" className="nav__inner-link">
                  DAO
                </a>
                <a href="#team" className="nav__inner-link">
                  Team
                </a>
                <a href="#join" className="nav__inner-link">
                  FAQ
                </a>
                <a href="#footer" className="nav__inner-link">
                  DOCS
                </a>
              </div>
              <div className="nav__inner-social">
                <a href="/" className="nav__inner-social-link">
                  <img src="images/twitter.png" alt="twitter" />
                </a>
                <a href="/" className="nav__inner-social-link">
                  <img src="images/logMark.png" alt="logMark" />
                </a>
                <a href="/" className="nav__inner-social-link">
                  <img src="images/discord.png" alt="discord" />
                </a>
                <a href="/" className="button-primary">
                  CONNECT WALLET
                </a>
              </div>
            </div>
          </nav>
          <div
            className={"burger " + (menu ? "active" : "")}
            onClick={() => {
              setMenu(!menu);
            }}
          ></div>
        </div>
      </div>
    </header>
  );
}
