import React, { Fragment, useContext, useState } from "react";
/// React router dom
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";

import logo from "../../../images/logo-full.png";
import logo_dark from "../../../images/logo-full-dark.png";
import icon from "../../../images/logo.png";

import './navHeader.css';

export function NavMenuToggle() {
  setTimeout(() => {
    let mainwrapper = document.querySelector("#main-wrapper");
    if (mainwrapper.classList.contains('menu-toggle')) {
      mainwrapper.classList.remove("menu-toggle");
    } else {
      mainwrapper.classList.add("menu-toggle");
    }
  }, 200);
}

const NavHader = () => {
  const [toggle, setToggle] = useState(false);
  const { navigationHader, openMenuToggle, background } = useContext(
    ThemeContext
  );

  return (
    <div className="nav-header">
      <Link to="/app/dashboard" className="brand-logo">
        {background.value === "dark" || navigationHader !== "color_1" ? (
          <Fragment>
            <img src={toggle ? icon : logo_dark} alt="" className="desktop-logo" />
            <img src={icon} alt="" className="mobile-logo" />
          </Fragment>
        ) : (
          <Fragment>
            <img src={toggle ? icon : logo} alt="" className="desktop-logo" />
            <img src={icon} alt="" className="mobile-logo" />
          </Fragment>
        )}
      </Link>

      <div
        className="nav-control"
        onClick={() => {
          setToggle(!toggle);
          NavMenuToggle();
        }}
      >
        <div className={`hamburger ${toggle ? "is-active" : ""}`}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </div>
  );
};

export default NavHader;
