import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import { useEffect } from "react";

export default function Home() {

    useEffect(() => {
        document.title = 'Acceuil'
    })
    return(
        <div>
            <Header />
            <div>
                <Banner />
                <Gallery />
            </div>
            <Footer />
        </div>
    )
}