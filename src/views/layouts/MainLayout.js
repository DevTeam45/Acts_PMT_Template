import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

import Nav from "../layouts/nav";
import Footer from "../layouts/Footer";
import { ThemeContext } from "../../context/ThemeContext";

function MainLayout() {
    const { menuToggle } = useContext(ThemeContext);
    return (
        <div id="main-wrapper" className={`show ${menuToggle ? "menu-toggle" : ""}`}>
            <Nav />
            <div className="content-body" style={{ minHeight: window.screen.height - 45 }}>
                <div className="container-fluid">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MainLayout;