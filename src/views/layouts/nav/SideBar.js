// import React, { useContext, useEffect, useReducer, useState } from "react";
// import PerfectScrollbar from "react-perfect-scrollbar";
// import Collapse from 'react-bootstrap/Collapse';
// import { Link } from "react-router-dom";
// import { useScrollPosition } from "@n8tb1t/use-scroll-position";
// import { ThemeContext } from "../../../context/ThemeContext";
// import { MenuList } from './Menu';
// import { getUserRights } from '../../../services/ccms/userManagement/user/user_endpoints';

import React, { useContext, useEffect, useReducer, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import Collapse from "react-bootstrap/Collapse";
import { Link } from "react-router-dom";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { ThemeContext } from "../../../context/ThemeContext";
import { MenuList } from "./Menu";
import { getUserRights } from "../../../services/ccms/userManagement/user/user_endpoints";

const reducer = (previousState, updatedState) => ({
  ...previousState,
  ...updatedState,
});

const initialState = {
  active: "",
  activeSubmenu: "",
};

const SideBar = () => {
  const { iconHover, sidebarposition, headerposition, sidebarLayout } =
    useContext(ThemeContext);

  const [state, setState] = useReducer(reducer, initialState);
  const [userRights, setUserRights] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);

  useEffect(() => {
    const btn = document.querySelector(".nav-control");
    const aaa = document.querySelector("#main-wrapper");
    const toggleFunc = () => aaa.classList.toggle("menu-toggle");
    btn.addEventListener("click", toggleFunc);

    const handleheartBlast = document.querySelector(".heart");
    const heartBlast = () => handleheartBlast.classList.toggle("heart-blast");
    handleheartBlast.addEventListener("click", heartBlast);

    const fetchUserRights = async () => {
      try {
        const userID = localStorage.getItem("userID");
        const rights = await getUserRights(userID);
        setUserRights(Array.isArray(rights.results) ? rights.results : []); // Ensure rights is an array
      } catch (error) {
        console.error("Error fetching user rights:", error);
      }
    };

    fetchUserRights();
  }, []);

  useEffect(() => {
    if (Array.isArray(userRights)) {
      setFilteredMenu(filterMenuItems(MenuList, userRights));
    }
  }, [userRights]);

  const filterMenuItems = (menuItems, userRights) => {
    // Extract the rights names into an array
    const rightsNames = userRights.map((right) => right.name);

    return menuItems.filter((item) => {
      if (item.content) {
        // Recursively filter submenus
        item.content = filterMenuItems(item.content, rightsNames);
        // Include the item if it has submenus that meet the criteria
        return (
          item.content.length > 0 ||
          !item.rights ||
          item.rights.length === 0 ||
          item.rights.every((right) => rightsNames.includes(right))
        );
      }
      // Allow items with no specific rights required
      if (!item.rights || item.rights.length === 0) {
        return true;
      }
      // Check if user has all required rights for the item
      return item.rights.every((right) => rightsNames.includes(right));
    });
  };

  const handleMenuActive = (status) => {
    setState({ active: status });
    if (state.active === status) {
      setState({ active: "" });
    }
  };

  const handleSubmenuActive = (status) => {
    setState({ activeSubmenu: status });
    if (state.activeSubmenu === status) {
      setState({ activeSubmenu: "" });
    }
  };

  const [hideOnScroll, setHideOnScroll] = useState(true);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );

  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];

  return (
    <div
      className={`dlabnav ${iconHover} ${
        sidebarposition.value === "fixed" &&
        sidebarLayout.value === "horizontal" &&
        headerposition.value === "static"
          ? hideOnScroll > 120
            ? "fixed"
            : ""
          : ""
      }`}
    >
      <PerfectScrollbar className="dlabnav-scroll">
        <ul className="metismenu" id="menu">
          {filteredMenu.map((data, index) => {
            let menuClass = data.classsChange;
            if (menuClass === "menu-title") {
              return (
                <li className={menuClass} key={index}>
                  {data.title}
                </li>
              );
            } else {
              return (
                <li
                  className={`${
                    state.active === data.title ? "mm-active" : ""
                  }`}
                  key={index}
                >
                  {data.content && data.content.length > 0 ? (
                    <Link
                      to={"#"}
                      className="has-arrow"
                      onClick={() => {
                        handleMenuActive(data.title);
                      }}
                    >
                      {data.iconStyle}
                      <span className="nav-text">{data.title}</span>
                    </Link>
                  ) : (
                    <Link to={data.to}>
                      {data.iconStyle}
                      <span className="nav-text">{data.title}</span>
                    </Link>
                  )}
                  <Collapse in={state.active === data.title ? true : false}>
                    <ul
                      className={`${
                        menuClass === "mm-collapse" ? "mm-show" : ""
                      }`}
                    >
                      {data.content &&
                        data.content.map((subData, subIndex) => {
                          return (
                            <li
                              key={subIndex}
                              className={`${
                                state.activeSubmenu === subData.title
                                  ? "mm-active"
                                  : ""
                              }`}
                            >
                              {subData.content && subData.content.length > 0 ? (
                                <>
                                  <Link
                                    to={subData.to}
                                    className={
                                      subData.hasMenu ? "has-arrow" : ""
                                    }
                                    onClick={() => {
                                      handleSubmenuActive(subData.title);
                                    }}
                                  >
                                    {subData.title}
                                  </Link>
                                  <Collapse
                                    in={
                                      state.activeSubmenu === subData.title
                                        ? true
                                        : false
                                    }
                                  >
                                    <ul
                                      className={`${
                                        menuClass === "mm-collapse"
                                          ? "mm-show"
                                          : ""
                                      }`}
                                    >
                                      {subData.content &&
                                        subData.content.map(
                                          (nestedData, nestedIndex) => {
                                            return (
                                              <li key={nestedIndex}>
                                                <Link
                                                  to={nestedData.to}
                                                  className={`${
                                                    path === nestedData.to
                                                      ? "mm-active"
                                                      : ""
                                                  }`}
                                                >
                                                  {nestedData.title}
                                                </Link>
                                              </li>
                                            );
                                          }
                                        )}
                                    </ul>
                                  </Collapse>
                                </>
                              ) : (
                                <Link to={subData.hasMenu ? "#" : subData.to}>
                                  {subData.title}
                                </Link>
                              )}
                            </li>
                          );
                        })}
                    </ul>
                  </Collapse>
                </li>
              );
            }
          })}
        </ul>

        <div className="copyright">
          <p>
            <strong>CCMS | App Name Here</strong> © 2024 All Rights Reserved
          </p>
          <p className="fs-12">
            Made with <span className="heart"></span>{" "}
            <a href="https://actschurch.co.za" target="_blank" rel="noreferrer">
              Acts Christian Church
            </a>
          </p>
        </div>
      </PerfectScrollbar>
    </div>
  );
};

export default SideBar;
