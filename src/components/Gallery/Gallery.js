import React from "react";
import datas from '../../data/data'

export default function Galley() {
    return(
        <div>
            <ul style={{display:"flex",flexWrap:'wrap',gap:60}}>
                {datas.map(data => {
                    return(
                        <li style={{width:340, height:340}}>
                            
                            
                            <img style={{width:340, height:340}} src={data.cover} alt="Miniature de l'appartement" />
                            <p style={{position:'relative', bottom:80,fontSize:18, color: 'white'}}>{data.title}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}