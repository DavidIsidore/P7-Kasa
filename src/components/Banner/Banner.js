import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import './banner.scss'


export default function Banner() {
    const location = useLocation()
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