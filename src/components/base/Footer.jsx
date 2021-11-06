import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="anchor" id="footer"></div>
      <div className="auto__container">
        <div className="footer__inner">
          <div className="footer__inner-social">
            <a href="/" className="footer__inner-social-link">
              <img src="images/twitter.png" alt="twitter" />
            </a>
            <a href="/" className="footer__inner-social-link">
              <img src="images/logMark.png" alt="logMark" />
            </a>
            <a href="/" className="footer__inner-social-link">
              <img src="images/discord.png" alt="discord" />
            </a>
          </div>
          <h4>g4k1 dao</h4>
          <h6 className="sm nikyu">7,777 unique g4k1’s who need a home</h6>
          <h6 className="sm nikyu">©2021 g4k1 dao, all rights reserved</h6>
        </div>
      </div>
    </footer>
  );
}
