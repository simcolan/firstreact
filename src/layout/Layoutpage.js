import React, { Component } from "react";
import { NavbarComponent } from "../components/Navbar";

const LayoutPageHOC = (Component) => {
    const LayoutPage = () => {
        return (
            <div style = {{backgroundColor: "black"}}>
                <NavbarComponent />
                <div>
                    <Component />
                </div>
            </div>
        );
    };
    return LayoutPage;
};
 export { LayoutPageHOC as LayoutPage };