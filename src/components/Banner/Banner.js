import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './banner.scss'

export default function Banner() {
    //récupération de la localisation courante de la page
    const location = useLocation()
    //initialisation du useState
    const [aboutPage, setAboutPage] = useState()
    useEffect(() => {
        //si on est sur la page A propos, on passe la valeur true à setAboutPage
        if (location.pathname === '/about') {
            setAboutPage(true)
        }
        // eslint-disable-next-line
    }, [])

    return (
        //si on est sur la page A propos,
        // le nom de classe est "banner_about", sinon "banner"
        <section className={aboutPage ? 'banner_about' : 'banner'}>
            {!aboutPage && <p>Chez vous, partout et ailleurs</p>}
        </section>
    )
}
