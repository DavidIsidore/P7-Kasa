import React from 'react'
import { Link } from 'react-router-dom'
import './card.scss'

export default function Card({ id, cover, title }) {
  return (
    <Link to={`/accomodation/${id}`} className="singleCard">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </Link>
  )
}
