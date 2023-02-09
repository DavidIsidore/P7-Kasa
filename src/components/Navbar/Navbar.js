import React from "react";
import { Link } from "react-router-dom";
import './navbar.scss'

export default function Navbar() {
    return(
        <nav className="nav">
            <ul className="nav__list">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/about">À propos</Link> </li>
            </ul>
        </nav>
    )
}