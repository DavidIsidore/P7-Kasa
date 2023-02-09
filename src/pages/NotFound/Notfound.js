import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './notFound.scss'

export default function NotFound() {
    return(
        <div className="notFound">
            <Header />
            <div className="notFound__error">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <Footer />
        </div>
    )
}