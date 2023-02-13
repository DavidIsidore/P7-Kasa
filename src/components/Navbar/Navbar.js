import React from "react";
import { Link } from "react-router-dom";
import './navbar.scss'
import { useLocation } from "react-router-dom";

export default function Navbar() {
    const location=useLocation()
    console.log(location.pathname)
    return(
        <nav className="nav">
            <ul className="nav__list">
                <li className={location.pathname === "/" ? ('nav__list_item_active'):('nav__list_item')}><Link to="/">Accueil</Link></li>
                <li className={location.pathname === "/about" ? ('nav__list_item_active'):('nav__list_item')}><Link to="/about">À propos</Link> </li>
            </ul>
        </nav>
    )
}