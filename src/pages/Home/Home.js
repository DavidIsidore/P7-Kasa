import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";

export default function Home() {
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