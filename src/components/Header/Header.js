import React from "react";

import logo from '../../assets/logo.svg'
import Navbar from "../Navbar/Navbar";

export default function Header() {
    return(
        <header>
            <h1>
                <img src={logo} alt="Kasa, location d'appartements" />
            </h1>
            <Navbar />
        </header>
    )
}