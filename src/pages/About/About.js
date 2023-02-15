import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
//import arrow_down from '../../assets/arrow_down.svg';
//import arrow_up from '../../assets/arrow_up.svg'
import { useEffect } from "react";
import aboutDatas from "../../data/aboutDatas";

import Collapse from "../../components/Collapse/Collapse";
import './about.scss'

export default function About() {

    useEffect(() => {
        document.title = 'À propos'
    })

    //const [isOpen, setIsOpen] = useState(false)
    console.log(aboutDatas)

    /*useEffect((setIsOpen) => {
        return () => setIsOpen(false)
    })*/

    /*return(
        <div>
            <Header />
            <Banner />
            {isOpen? (
                <div style={{gap:20}}>
                <div style={{display:'flex', flexDirection:'row', backgroundColor:'#FF6060', justifyContent:'space-between', paddingLeft:20, paddingRight:20, alignItems:'center', borderRadius:5}}>
                    <h2>Fiabilité</h2>
                    <img src={arrow_up} alt="flèche en bas" style={{width:14, height:23, cursor:'pointer'}} onClick={() => setIsOpen(false)}/>
                </div>
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes. </p>
            </div>
            ):(
                <div>
                <div style={{display:'flex', flexDirection:'row', backgroundColor:'#FF6060', justifyContent:'space-between', paddingLeft:20, paddingRight:20, alignItems:'center', borderRadius:5}}>
                    <h2>Fiabilité</h2>
                    <img src={arrow_down} alt="flèche en bas" style={{width:14, height:23}} onClick={() => setIsOpen(true)}/>
                </div>
                
            </div>
            )}
            
            
            <div style={{gap:20}}>
                 <div style={{display:'flex', flexDirection:'row', backgroundColor:'#FF6060', justifyContent:'space-between', paddingLeft:20, paddingRight:20, alignItems:'center', borderRadius:5}}>
                    <h2>Respect</h2>
                    <img src={arrow_up} alt="flèche en bas" style={{width:14, height:23}} />
                 </div>
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme. </p>
            </div>
            <div>
                <div style={{display:'flex', flexDirection:'row', backgroundColor:'#FF6060', justifyContent:'space-between', paddingLeft:20, paddingRight:20, alignItems:'center', borderRadius:5}}>
                    <h2>Services</h2>
                    <img src={arrow_up} alt="flèche en bas" style={{width:14, height:23}} />
                </div>
                <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
            </div>
            <div>
                <div style={{display:'flex', flexDirection:'row', backgroundColor:'#FF6060', justifyContent:'space-between', paddingLeft:20, paddingRight:20, alignItems:'center', borderRadius:5}}>
                    <h2>Sécurité</h2>
                    <img src={arrow_up} alt="flèche en bas" style={{width:14, height:23}} />
                </div>
                <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </div>
            <Footer />
        </div>
    )*/
    return(
        <div>
        <Header />
        <Banner />
        <div className="about" >
            {   aboutDatas.map(data => {
                return(
                    <div className="about_collapse" key={data.id}><Collapse title={data.title} content={data.content} style={{gap:30}} /></div>
                        )
                })}
                    </div>
        <Footer />
        </div>
        
    )
    
 

    
}