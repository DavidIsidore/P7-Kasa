import React from 'react'
import Header from '../../components/Header/Header'
import './notFound.scss'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function NotFound() {
    // on affiche "Oups..." comme titre de la page
    useEffect(() => {
        document.title = 'Oups...'
    })

    return (
        <div className="notFound">
            <Header />
            <div className="notFound__error">
                <h1 className="notFound__error__title">404</h1>
                <p className="notFound__error__text">
                    Oups! La page que vous demandez n'existe pas.
                </p>
            </div>
            <Link to="/" className="notFound__error__back">
                Retourner sur la page d'accueil
            </Link>
        </div>
    )
}
