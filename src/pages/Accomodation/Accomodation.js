import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//import { useLocation } from "react-router-dom";
import datas from "../../data/data";
//import Card from "../../components/Card/Card";
import Slider from "../../components/Slider/Slider";

export default function Accomodation() {
    //const location=useLocation()
    //console.log(location)
    const params= useParams('id').id

    
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
    const tags = appartement[0].tags
    const name = appartement[0].host.name
    const picture = appartement[0].host.picture
    
    
    return(
        <div>
            <Header />
            <Slider appart={appart}  />
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <div>
                    
                    <h1>{title} </h1>
                    <h2>{location}</h2>
                    <p>{tags}</p>
                </div>
                <div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        <h2>{name}</h2>
                        <img style={{width:64, height:64, borderRadius:50}} src={picture} alt="Visage de l'hôte"/>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}