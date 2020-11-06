import React, { Component } from "react";
import { NavbarComponent } from "../components/Navbar";

const LayoutPageHOC = (Component) => {
    const LayoutPage = () => {
        return (
            <div style={{height: "100%"}} >
                <NavbarComponent />
                <div style={{height: "100%"}}>
                    <Component />
                </div>
            </div>
        );
    };
    return LayoutPage;
};
 export { LayoutPageHOC as LayoutPage };