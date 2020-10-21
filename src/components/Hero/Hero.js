import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-text">
            <h1>We &lt;3 people who code</h1>
        <p>We build products that empower developers and connect them to solutions that enable productivity, growth, and discovery.</p>
        <div className="btn">
            <button style={{margin:"5px",cursor:'pointer',outline:'none',width:'150px', fontSize:"12px",boxSizing:'border-box',borderRadius:"4px", color:'#f48024',height:'2.5rem',border:'1px solid #f48024'}}>For developers</button>
            <button  style={{height:'2.5rem',cursor:'pointer',outline:'none',width:'150px',fontSize:"12px",borderRadius:"4px",backgroundColor:"#f48024",color:'#fff',border:'1px solid #f48024'}}>For businesses</button>
        </div>

            </div>
    
        </div>
    )
}

export default Hero
