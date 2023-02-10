import React from "react";
import banner from '../../assets/home_banner.svg'
import aboutBanner from '../../assets/about_banner.svg'
import { useLocation } from "react-router-dom";
import './banner.scss'


export default function Banner() {
    const location = useLocation()
    console.log(location)
    console.log(location.pathname)
    return(
        location.pathname === "/about" ? (
            <img src={aboutBanner} alt="Bannière de la page à propos" className="banner"/>
        ):(<div>
        <img src={banner} alt="bannière de la page d'accueil" className="banner"/>
        <h2 style={{position:'relative',top:-200, textAlign:'center', color:'white', fontSize:48}}>Chez vous, partout et ailleurs</h2>
        </div>)
    )
}