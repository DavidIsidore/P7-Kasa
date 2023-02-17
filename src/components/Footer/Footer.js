import React from 'react'
import logoWhite from '../../assets/logo_white.svg'
import './footer.scss'

export default function Footer() {
  return (
    <div className="footer">
      <img
        src={logoWhite}
        alt="Kasa, location d'appartements"
        className="footer_img"
      />
      <p className="footer_text">© 2020 Kasa. All rights reserved</p>
    </div>
  )
}
