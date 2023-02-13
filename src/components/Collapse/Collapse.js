import React from "react";
import { useState} from "react";
import aboutDatas from '../../data/aboutDatas'
import arrow_up from '../../assets/arrow_up.svg'
import arrow_down from '../../assets/arrow_down.svg'


export default function Collapse({title, content}) {

   
    const [isOpen, setIsOpen] = useState(false)
    console.log(aboutDatas[0].id)
    
    return isOpen? (
            <div style={{gap:20}}>
            <div  onClick={() => setIsOpen(false)} style={{display:'flex', flexDirection:'row', backgroundColor:'#FF6060', justifyContent:'space-between', paddingLeft:20, paddingRight:20, alignItems:'center', borderRadius:5}}>
                <h2>{title}</h2>
                <img src={arrow_up} alt="flèche en bas" style={{width:14, height:23, cursor:'pointer'}} />
            </div>
            <p>{content} </p>
        </div>
        ):(
            
            <div  onClick={() => setIsOpen(true)} style={{display:'flex', flexDirection:'row', backgroundColor:'#FF6060', justifyContent:'space-between', paddingLeft:20, paddingRight:20, alignItems:'center', borderRadius:5}}>
                <h2>{title}</h2>
                <img src={arrow_down} alt="flèche en bas" style={{width:14, height:23}}/>
            </div>
            
        
        )

    
        
        
}