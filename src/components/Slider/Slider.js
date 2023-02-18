import ArrowRight from '../../assets/arrow_forward.svg'
import ArrowLeft from '../../assets/arrow_back.svg'
import { useState } from 'react'
import './slider.scss'

export default function Slider({ appart }) {
    // on initialise l'index courant du slider à 0 avec useState
    const [currentIndex, setCurrentIndex] = useState(0)

    // pour passer à la photo suivante
    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1) //on incrémente l'index courant de 1
        if (currentIndex === appart.length - 1) setCurrentIndex(0) // si on est arrivé à la fin de la série de photos, on réinitialise l'index courant à 0 pour revenir au début des slides
    }

    // pour revenir à la photo précédente
    const prevSlide = () => {
        setCurrentIndex(currentIndex - 1) // on décrémente la valeur de l'index courant de 1
        if (currentIndex === 0) setCurrentIndex(appart.length - 1) // si l'index courant est égal à 0 (début de la série de photos) , on initialise l'index pour aller à la dernière photo de la série
    }

    return (
        <section
            style={{ backgroundImage: `url(${appart[currentIndex]})` }} // on affiche la photo correspondant à l'index courant
            className="carousel"
        >
            {appart.length > 1 && (
                <>
                    <img // flèche pour passer à la photo suivante
                        className="carousel_arrow carousel_arrow_right"
                        src={ArrowRight}
                        alt="show next slider"
                        onClick={nextSlide}
                    />
                    <img // flèche pour revenir à la photo précédente
                        className="carousel_arrow carousel_arrow_left"
                        src={ArrowLeft}
                        alt="show previous slider"
                        onClick={prevSlide}
                    />
                    {/*affichage de l'index de la photo courante sur le nombre total de photos */}
                    <p className="slideCount">
                        {currentIndex + 1} / {appart.length}
                    </p>
                </>
            )}
        </section>
    )
}
