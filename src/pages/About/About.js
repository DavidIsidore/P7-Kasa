import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
//import arrow_down from '../../assets/arrow_down.svg';
//import arrow_up from '../../assets/arrow_up.svg'
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
                    return (
                        <div className="about_collapse" key={data.id}>
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
