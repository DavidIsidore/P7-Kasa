import React from 'react'
import { useState } from 'react'

import arrow_up from '../../assets/arrow_up.svg'
import arrow_down from '../../assets/arrow_down.svg'
import './collapse.scss'

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <h2 onClick={() => setIsOpen(!isOpen)} className="collapse_title">
        {title}
        <img src={isOpen ? arrow_up : arrow_down} alt="arrow" />
      </h2>
      <div className={isOpen ? 'collapse_content' : 'collapse_content_hidden'}>
        {Array.isArray(content)
          ? content.map((item, index) => {
              return <p key={index}>{item}</p>
            })
          : content}
      </div>
    </div>
  )
}
