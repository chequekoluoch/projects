import React, { useState, useRef } from 'react'
import "./Acordian.css"
import Chevron from './Chevron'


const Acordian = (props) => {
    const [activated, setActivated]=useState("")
    const [height, setHeight]=useState("0px")
    const [rotate, setRotate]=useState("accordion__icon")

    const content =useRef(null)

    const toggleAccordion=()=>{
         setActivated(activated === "" ? "active": "")
         setHeight(activated === "active" ? "0px": `${content.current.scrollHeight}px`)
         setRotate(activated === "active" ? "accordion__icon":"accordion__icon rotate")
        }

    return (
        <div className="accordion__section">
            <button className={`accordion ${activated}`}
            onClick={toggleAccordion}
            
            >
                <p className="accordion__title">
                   {props.title} 
                </p>
                <Chevron className={`${rotate}`} width={15} fill={"#777"}/>
            </button>
            
            <div ref={content} style={{maxHeight:`${height}`}} className="accordion__content">
            <div className="accordion__text"  dangerouslySetInnerHTML = {{ __html: props.content }}/>
            
            
            
            </div>
        </div>
    )
}

export default Acordian
