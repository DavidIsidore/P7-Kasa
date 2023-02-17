import React from 'react'

import logo from '../../assets/logo.svg'
import Navbar from '../Navbar/Navbar'
import './header.scss'

export default function Header() {
    return (
        <header className="header">
            <h1>
                <img src={logo} alt="Kasa, location d'appartements" />
            </h1>
            <Navbar />
        </header>
    )
}
