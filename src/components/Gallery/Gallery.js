import React from "react";
import datas from '../../data/data'
import Card from "../Card/Card";
import './gallery.scss'

export default function Galley() {
    return(
        <div className="gallery">
            <ul style={{display:"flex",flexWrap:'wrap',gap:60}}>
                {datas.map(data => {
                    return(
                        <Card
                            key={data.id} 
                            id={data.id}
                            cover={data.cover}
                            title={data.title}
                        />
                    )
                })}
            </ul>
        </div>
    )
}