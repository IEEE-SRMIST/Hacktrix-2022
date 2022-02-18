import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="made">Made with ❤️‍🔥 by IEEE SRM SB</div>
        <div className="end-list">
          <ul className="footer-list list-unstyled">
            <li className="footer-item">
              <a
                className="footer-link"
                href="https://www.ieeesrmist.in/privacypolicy"
                target="_blank"
              >
                <span className="links">Privacy</span>
              </a>
            </li>
            <li className="footer-item">
              <a className="footer-link" href="/" target="_blank">
                <span className="links">Terms</span>
              </a>
            </li>
            <li className="footer-item">
              <a
                className="footer-link"
                href="https://devfolio.co/code-of-conduct"
                target="_blank"
              >
                <span className="links">Code of Conduct</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
