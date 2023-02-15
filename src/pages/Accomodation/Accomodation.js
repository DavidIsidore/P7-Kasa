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
import '../Accomodation/accomodation.scss'

export default function Accomodation() {
    
    const params= useParams('id').id

    useEffect(() => {
        document.title = `${appartement[0].title}`
    })

    
    
    const [appart, showAppart] = useState([])
    const appartement = datas.filter(data => data.id===params)

    useEffect(() => {
        const appartement = datas.filter(data => data.id===params)
       showAppart(appartement[0].pictures)
    }, [params])

   

    const title= appartement[0].title
    const location = appartement[0].location
    //const tags = appartement[0].tags
    const name = appartement[0].host.name.split(' ')
    
    const picture = appartement[0].host.picture
    const redStarsNumber = appartement[0].rating
    const greyStarsNumber = 5 - redStarsNumber
    const description = appartement[0].description
    const equipments = appartement[0].equipments
    
    
    /*return(
        <div>
            <Header />
            <Slider appart={appart}  />
            <div className="accomodation" >
                <div className="accomodation_bloc">
                    <div className="accomodation_bloc_infos" >
                        <h1  >{title} </h1>
                        <h2  >{location}</h2>
                        <div>{appartement[0].tags.map((tag,index) =>{
                            return(
                             <button key={index}>{tag}</button>
                         )
                         })}
                         </div>
                    </div>
                    <div className="accomodation_bloc_host" >
                       <div >
                           <h2 className="accomodation_bloc_host_name" >{name}</h2>
                           <img style={{width:64, height:64, borderRadius:50}} src={picture} alt="Visage de l'hôte"/>
                       </div>
                       <div className="accomodation_bloc_host_rating">
                           {Array.from({ length: redStarsNumber }, (_, i) => (
                               <img key={i} src={redstar} alt="étoiles de notation pleine" className="redstar"/>
                           ))}
                           {Array.from({ length: greyStarsNumber }, (_, i) => (
                               <img key={i} src={greystar} alt="étoiles de notation vide" className="greystar"/>
                           ))}
                        </div>
                    
                    </div>
                </div>
                
            </div>
            <div className="rent">
                    <div className="rent_description">
                        <Collapse  title={'Description'} content={description} />
                    </div>
                    <div className="rent_equipments">
                    <Collapse title={'Équipements'} content={equipments} />
                    </div>
                </div>
            <Footer />
        </div>
    )*/

    return(
        <>
            <Header />
            <Slider appart={appart} />
            <div className="accomodation">
                <div className="accomodation_bloc">
                    <div className="accomodation_bloc_infos">
                        <h1>{title}</h1>
                        <p>{location}</p>
                        <div>
                            {appartement[0].tags.map((tag,index) => {
                                return(
                                    <button key={index}>{tag}</button>
                                )
                            })}
                        </div>
                    </div>
                        <div className="accomodation_bloc_host">
                            <div>
                                <h2 className="accomodation_bloc_host_name" >
                                <span>{name[0]}</span>
                                <span>{name[1]}</span>
                                </h2>
                                <img style={{width:64, height:64, borderRadius:50}} src={picture} alt="Visage de l'hôte"/>
                            </div>
                            <div className="accomodation_bloc_host_rating">
                                {Array.from({ length: redStarsNumber }, (_, i) => (
                               <img key={i} src={redstar} alt="étoiles de notation rouge" className="redstar"/>
                                ))}
                                {Array.from({ length: greyStarsNumber }, (_, i) => (
                               <img key={i} src={greystar} alt="étoiles de notation grise" className="greystar"/>
                                ))}
                            </div>
                            
                        </div>

                    

                </div>
                <div className="accomodation_collapse">
                    <div className="accomodation_collapse_item">
                        <Collapse title={'Description'} content={description} />

                    </div>
                    <div className="accomodation_collapse_item">
                        <Collapse title={'Équipements'} content={equipments} />
                    </div>

                </div>
                
            </div>
            <Footer />
        </>
    )
}