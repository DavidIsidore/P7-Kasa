import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Card({id, cover, title}) {
    const idParam = useParams('id')
    console.log(idParam)
    return(
        <Link to={`/accomodation/${id}`}>
            <img src={cover} alt={title} />
            <h3>{title}</h3>
        </Link>
    )
}