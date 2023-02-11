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
    
    
    return(
        <div>
            <Header />
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <div>
                    <Slider appart={appart}/>
                    <h1>{appartement[0].title} </h1>
                    <h2>{appartement[0].location}</h2>
                    <p>{appartement[0].tags}</p>
                </div>
                <div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        <h2>{appartement[0].host.name}</h2>
                        <img style={{width:64, height:64, borderRadius:50}} src={appartement[0].host.picture} alt="Visage de l'hôte"/>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}