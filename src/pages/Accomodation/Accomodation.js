import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import datas from '../../data/data'

import Slider from '../../components/Slider/Slider'
import redstar from '../../assets/red_star.svg'
import greystar from '../../assets/grey_star.svg'
import './accomodation.scss'
import Collapse from '../../components/Collapse/Collapse'
import '../Accomodation/accomodation.scss'

export default function Accomodation() {
    // on récupère l'id correspondant à l'appartement
    const params = useParams('id').id

    useEffect(() => {
        // on affiche le nom de l'appartement comme titre de la page
        document.title = `${appartement[0].title}`
    })

    // on déclare la variable d'état appart et on l'initialise sous forme de tableau
    const [appart, showAppart] = useState([])

    // on parcourt le tableau de données pour sélectionner les données dont l'id correspond à celui récupéré par useParams
    const appartement = datas.filter((data) => data.id === params)

    useEffect(() => {
        // on parcourt le tableau de données pour sélectionner l'appartement dont l'id correspond à celui récupéré par useParams et on affiche la photo
        const appartement = datas.filter((data) => data.id === params)
        showAppart(appartement[0].pictures)
    }, [params])

    // on déclare les variables extraites du tableau de données pour pouvoir les afficher
    const title = appartement[0].title
    const location = appartement[0].location
    const name = appartement[0].host.name.split(' ') // on sépare le nom de l'hôte pour pouvoir l'afficher sur 2 lignes
    const picture = appartement[0].host.picture
    const redStarsNumber = appartement[0].rating // on définit le nombre d'étoiles rouges
    const greyStarsNumber = 5 - redStarsNumber // on définit le nombre d'étoiles grises
    const description = appartement[0].description
    const equipments = appartement[0].equipments

    return (
        <>
            <Header />
            <Slider appart={appart} />
            <div className="accomodation">
                <div className="accomodation_bloc">
                    <div className="accomodation_bloc_infos">
                        <h1>{title}</h1>
                        <p>{location}</p>
                        <div>
                            {appartement[0].tags.map((tag, index) => {
                                // on parcourt le tableau de données récupérées pour afficher les tags
                                return <button key={index}>{tag}</button>
                            })}
                        </div>
                    </div>
                    <div className="accomodation_bloc_host">
                        <div>
                            {' '}
                            {/*on affiche le nom de l'hôte sur 2 lignes */}
                            <h2 className="accomodation_bloc_host_name">
                                <span>{name[0]}</span>
                                <span>{name[1]}</span>
                            </h2>
                            <img
                                className="accomodation_bloc_host_picture"
                                src={picture}
                                alt="Visage de l'hôte"
                            />
                        </div>
                        <div className="accomodation_bloc_host_rating">
                            {' '}
                            {/* on convertit l'ensemble des étoiles rouges sous forme de tableau*/}
                            {Array.from({ length: redStarsNumber }, (_, i) => (
                                <img
                                    key={i}
                                    src={redstar}
                                    alt="étoiles de notation rouge"
                                    className="redstar"
                                />
                            ))}{' '}
                            {/* on convertit l'ensemble des étoiles grises sous forme de tableau*/}
                            {Array.from({ length: greyStarsNumber }, (_, i) => (
                                <img
                                    key={i}
                                    src={greystar}
                                    alt="étoiles de notation grise"
                                    className="greystar"
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="accomodation_collapse">
                    <div className="accomodation_collapse_item">
                        {' '}
                        {/* on affiche la description de l'appartement issu du tableau de données */}
                        <Collapse title={'Description'} content={description} />
                    </div>
                    <div className="accomodation_collapse_item">
                        {' '}
                        {/* on affiche les équipements de l'appartement, récupérés à partir du tableau de données */}
                        <Collapse title={'Équipements'} content={equipments} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
