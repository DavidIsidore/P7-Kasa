import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import { useEffect } from "react";
import './home.scss'


export default function Home() {
    

    useEffect(() => {
        document.title = 'Accueil'
    })
    return(
        <div>
            <Header />
            
                <Banner />
                <Gallery />
            
            <Footer />
        </div>
    )
}