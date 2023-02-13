import React from "react";
//import banner from '../../assets/source_home.svg'
//import aboutBanner from '../../assets/about_banner.svg'
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import './banner.scss'


export default function Banner() {
    const location = useLocation()
    //console.log(location)
    //console.log(location.pathname)
    /*return(
        location.pathname === "/about" ? (
            <img src={aboutBanner} alt="Bannière de la page à propos" className="banner_about"/>
        ):(<div>
        <img src={banner} alt="bannière de la page d'accueil" className="banner"/>
        <h2 className="text" >Chez vous, partout et ailleurs</h2>
        </div>)
    )*/

    /*return(
       
            location.pathname=== "/about"? 
            (<img src={aboutBanner} alt="Bannière de la page à propos" className="banner_about"/>):
            (<div className="div_banner"><img alt="bannière de la page d'accueil" className="banner"/>
        <h2 className="text" >Chez vous, partout et ailleurs</h2></div>)
        
    )*/
    const [aboutPage, setAboutPage] = useState()
    useEffect(() => {
		if(location.pathname === '/about'){
			setAboutPage(true)
		};
		// eslint-disable-next-line
	}, [])

	return (
		<section className={aboutPage ? 'banner_about' : 'banner'}>
			{!aboutPage && <p>Chez vous, partout et ailleurs</p>}
		</section>
	)
}