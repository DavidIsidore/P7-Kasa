import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
import { useLocation } from 'react-router-dom'

export default function Navbar() {
    // récupération de la localisation courante de la page
    const location = useLocation()
    return (
        {
            /* affichage de la barre de navigation*/
        },
        (
            <nav className="nav">
                <ul className="nav__list">
                    <li
                        className={
                            //si on est sur la page d'accueil, on attribue au lien la classe item_active pour le souligner
                            location.pathname === '/'
                                ? 'nav__list_item_active'
                                : 'nav__list_item'
                        }
                    >
                        <Link to="/">Accueil</Link>
                    </li>
                    <li
                        className={
                            //si on est sur la page A propos, on attribue au lien la classe item_active pour le souligner
                            location.pathname === '/about'
                                ? 'nav__list_item_active'
                                : 'nav__list_item'
                        }
                    >
                        <Link to="/about">À propos</Link>{' '}
                    </li>
                </ul>
            </nav>
        )
    )
}
