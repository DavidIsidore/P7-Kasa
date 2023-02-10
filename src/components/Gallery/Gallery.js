import React from "react";
import datas from '../../data/data'
import Card from "../Card/Card";

export default function Galley() {
    return(
        <div>
            <ul style={{display:"flex",flexWrap:'wrap',gap:60}}>
                {datas.map(data => {
                    return(
                        <Card 
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