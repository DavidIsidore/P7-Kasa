import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//import { useLocation } from "react-router-dom";
import datas from "../../data/data";
//import Card from "../../components/Card/Card";

export default function Accomodation() {
    //const location=useLocation()
    //console.log(location)
    const params= useParams('id').id
    console.log(params)

    const [appart, showAppart] = useState([])

    useEffect(() => {
        const appartement = datas.filter(data => data.id===params)
       showAppart(appartement[0].title)
    }, [params])

    console.log(appart)
    
    return(
        <div>
            <Header />
            
            <Footer />
        </div>
    )
}