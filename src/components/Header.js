import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="indigo nav-wrapper">
        <div className="container">
          <span className="brand-logo">Logo</span>
          <a className="sidenav-trigger" data-target="mobile-menu">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="#">Accueil</a>
            </li>
            <li>
              <a href="#">A propos</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
          <ul className="sidenav " id="mobile-menu">
            <li>
              <a href="#">Accueil</a>
            </li>
            <li>
              <a href="#">A propos</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
