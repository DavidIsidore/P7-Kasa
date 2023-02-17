import ArrowRight from '../../assets/arrow_forward.svg'
import ArrowLeft from '../../assets/arrow_back.svg'
import { useState } from 'react'
import './slider.scss'

export default function Slider({ appart }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1)
        if (currentIndex === appart.length - 1) setCurrentIndex(0)
    }

    const prevSlide = () => {
        setCurrentIndex(currentIndex - 1)
        if (currentIndex === 0) setCurrentIndex(appart.length - 1)
    }

    return (
        <section
            style={{ backgroundImage: `url(${appart[currentIndex]})` }}
            className="carousel"
        >
            {appart.length > 1 && (
                <>
                    <img
                        className="carousel_arrow carousel_arrow_right"
                        src={ArrowRight}
                        alt="show next slider"
                        onClick={nextSlide}
                    />
                    <img
                        className="carousel_arrow carousel_arrow_left"
                        src={ArrowLeft}
                        alt="show previous slider"
                        onClick={prevSlide}
                    />
                    <p className="slideCount">
                        {currentIndex + 1} / {appart.length}
                    </p>
                </>
            )}
        </section>
    )
}
