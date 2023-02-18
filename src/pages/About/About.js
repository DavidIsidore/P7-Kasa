import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import { useEffect } from 'react'
import aboutDatas from '../../data/aboutDatas'

import Collapse from '../../components/Collapse/Collapse'
import './about.scss'

export default function About() {
    useEffect(() => {
        document.title = 'À propos'
    })

    return (
        <div>
            <Header />
            <Banner />
            <div className="about">
                {aboutDatas.map((data) => {
                    // on parcourt le tableau
                    return (
                        <div className="about_collapse" key={data.id}>
                            {' '}
                            {/*pour afficher le titre et le contenu selon la key correspondant à l'id de l'objet */}
                            <Collapse
                                className="about_collapse_self"
                                title={data.title}
                                content={data.content}
                            />
                        </div>
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}
