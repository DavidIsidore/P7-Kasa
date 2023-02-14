import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//import { useLocation } from "react-router-dom";
import datas from "../../data/data";
//import Card from "../../components/Card/Card";
import Slider from "../../components/Slider/Slider";
import redstar from '../../assets/red_star.svg'
import greystar from '../../assets/grey_star.svg'
import './accomodation.scss'
import Collapse from '../../components/Collapse/Collapse'

export default function Accomodation() {
    //const location=useLocation()
    //console.log(location)
    const params= useParams('id').id

    useEffect(() => {
        document.title = `${appartement[0].title}`
    })

    
    //console.log(params)

    const [appart, showAppart] = useState([])
    const appartement = datas.filter(data => data.id===params)

    useEffect(() => {
        const appartement = datas.filter(data => data.id===params)
       showAppart(appartement[0].pictures)
    }, [params])

    //console.log(appart)

    const title= appartement[0].title
    const location = appartement[0].location
    //const tags = appartement[0].tags
    const name = appartement[0].host.name
    const picture = appartement[0].host.picture
    const redStarsNumber = appartement[0].rating
    const greyStarsNumber = 5 - redStarsNumber
    const description = appartement[0].description
    const equipments = appartement[0].equipments
    //console.log(rating)
    
    
    return(
        <div>
            <Header />
            <Slider appart={appart}  />
            <div className="infos" >
                <div>
                    
                    <h1 className="infos_title" >{title} </h1>
                    <h2 className="infos_location" >{location}</h2>
                    {appartement[0].tags.map((tag,index) =>{
                        return(
                            <button key={index}>{tag}</button>
                        )
                    })}
                </div>
                <div >
                    <div className="infos_host" >
                        <h2>{name}</h2>
                        <img style={{width:64, height:64, borderRadius:50}} src={picture} alt="Visage de l'hôte"/>
                    </div>
                    <div className='infos_rating'>
                        {Array.from({ length: redStarsNumber }, (_, i) => (
                            <img key={i} src={redstar} alt="étoiles de notation pleine" className="redstar"/>
                        ))}
                        {Array.from({ length: greyStarsNumber }, (_, i) => (
                            <img key={i} src={greystar} alt="étoiles de notation vide" className="greystar"/>
                        ))}
                    </div>
                    
                    
                </div>
                
            </div>
            <div className="rent" style={{display:'flex', flexDirection:'row'}}>
                    <div className="rent_description">
                        <Collapse title={'Description'} content={description} />
                    </div>
                    <div className="rent_equipments">
                    <Collapse title={'Équipements'} content={equipments} />
                    </div>
                </div>
            <Footer />
        </div>
    )
}