import React from "react";
import datas from '../../data/data'

export default function Galley() {
    return(
        <div>
            <ul>
                {datas.map(data => {
                    return(
                        <div >
                            {data.id}
                            {data.title}
                            <img style={{width:340, height:340}} src={data.cover} alt="Photo miniature" />
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}