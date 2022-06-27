import React from "react";
import logo from "../images/React.png"

function Navbar(){
    return(
        <nav className="nav">
            <img src={logo} alt="logo" className="nav-icon" />
            <h3 className="nav-logotext">ReactFacts</h3>
            <h4 className="nav-title">React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar