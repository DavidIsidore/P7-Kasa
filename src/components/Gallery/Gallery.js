import React from "react";
import datas from '../../data/data'

export default function Galley() {
    return(
        <div>
            <ul style={{display:"flex",flexWrap:'wrap'}}>
                {datas.map(data => {
                    return(
                        <li >
                            {data.id}
                            
                            <img style={{width:340, height:340}} src={data.cover} alt="Photo miniature" />
                            {data.title}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}