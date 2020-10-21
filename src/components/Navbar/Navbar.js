import React from 'react'
import { FaBars } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
//import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
  <header >
    <div className="" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <div className="main grid--call" style={{display:'flex',alignItems:'center',fontSize:'20px',color:'#6c6c6c'}}>
        <div ><Link style={{color:'#6c6c6c'}} to="/"><FaBars /></Link></div>
        <Link to="/">
        <img src="https://cdn.sstatic.net/Sites/stackoverflow/company/Img/logos/so/so-logo.svg?v=a010291124bf" alt="logo" width="200px"/>
        </Link>
        
      </div>
      <ol style={{display:'flex',listStyle:'none',justifyContent:'space-between'}}>

        <li><Link to="about">About</Link></li>
        <li><Link to="products">Products</Link></li>
        <li ><Link to="teams">For Teams</Link></li>
      </ol>
      
      <form>
        <div className="ps-relative" style={{fontSize:'29px',display:'flex',border:'1.5px solid #BCBFC2',height:'30px',width:'500px',boxSizing:'border-box',borderRadius:'5px',color:'#BCBFC2'}}>
          <BiSearch />
          <input type="text" style={{border:'none',outline:'none',fontSize:'1rem',width:'92%'}}/>
        </div>
      </form>
      <div className="popover">
        <button style={{height:'30px', boxSizing:'border-box',width:'100px',borderRadius:'4px',cursor:'pointer',border:'none',marginRight:'10px',outline:'none'}}>
          <Link to="/login">Login</Link>
          </button>
        <button style={{backgroundColor:'#33A5FF',height:'30px',width:'100px', boxSizing:'border-box',cursor:'pointer',borderRadius:'4px',border:'none',outline:'none'}}>
        <Link to="/signup">Signup</Link>
        </button>
        </div>
    </div>
  </header>
    )
}

export default Navbar
