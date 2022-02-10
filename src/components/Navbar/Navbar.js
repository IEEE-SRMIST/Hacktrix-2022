import React from "react";

import "./Navbar.css";


const Nav = () => {
  return (
    <div class="parentDiv">
      <div class="nav">
        <ul>
            <li className="nav-item" id="team">
              <a className="nav-link" href="#tracks">
                Tracks
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#prizes">
                Prizes
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="sponsers">
                Sponsors
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#faqs">
                FAQs
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#announcements">
                Announcements
              </a>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;