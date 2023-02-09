import React from "react";
import logo from '../../assets/logo.svg'
import './footer.scss'

export default function Footer() {
    return(
        <div className="footer">
            <img src={logo} alt="Kasa, location d'appartements" className="footer__img"/>
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}
