import React from "react";
import datas from '../../data/data'

export default function Galley() {
    return(
        <div>
            <ul style={{display:"flex",flexWrap:'wrap',gap:60}}>
                {datas.map(data => {
                    return(
                        <li >
                            
                            
                            <img style={{width:340, height:340}} src={data.cover} alt="Photo miniature" />
                            <p>{data.title}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}