import React from "react";
import banner from '../../assets/home_banner.svg'
import aboutBanner from '../../assets/about_banner.svg'
import { useLocation } from "react-router-dom";


export default function Banner() {
    const location = useLocation()
    console.log(location)
    console.log(location.pathname)
    return(
        location.pathname === "/about" ? (
            <img src={aboutBanner} alt="Bannière de la page à propos" />
        ):(
        <img src={banner} alt="bannière de la page d'accueil" />)
    )
}