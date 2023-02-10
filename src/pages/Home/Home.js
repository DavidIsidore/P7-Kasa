import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";

export default function Home() {
    return(
        <div>
            <Header />
            <div>
                <Banner />
            </div>
            <Footer />
        </div>
    )
}