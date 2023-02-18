import React from 'react'
import { useState } from 'react'

import arrow_up from '../../assets/arrow_up.svg'
import arrow_down from '../../assets/arrow_down.svg'
import './collapse.scss'

export default function Collapse({ title, content }) {
    //on initialise le useState avec la valeur false
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="collapse">
            <h2 onClick={() => setIsOpen(!isOpen)} className="collapse_title">
                {title}
                {/*si la valeur de isOpen est true, la flèche apparaît tournée vers le haut (collapse fermé) */}
                <img src={isOpen ? arrow_up : arrow_down} alt="arrow" />
            </h2>
            {/* si la valeur de isOpen est true, le nom de classe de la div est collapse_content (collapse ouvert), sinon le contenu est caché*/}
            <div
                className={
                    isOpen ? 'collapse_content' : 'collapse_content_hidden'
                }
            >
                {/*on vérifie si la valeur "content" est un tableau */}
                {/*si c'est le cas, on affiche le contenu correspondant au titre sous forme de paragraphe */}
                {Array.isArray(content)
                    ? content.map((item, index) => {
                          return <p key={index}>{item}</p>
                      })
                    : content}
            </div>
        </div>
    )
}
