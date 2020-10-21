import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { FaFacebook, FaGithub, FaExpandAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container">
        <div className='login__container'>
            <div className="logo">
            <img src={logo} alt="logo"/>
            </div>
            <div className="other__logins">
            <button className="google__btn">
            <svg aria-hidden="true" class="native svg-icon iconGoogle" width="18" height="18" viewBox="0 0 18 18">
                <path d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 002.38-5.88c0-.57-.05-.66-.15-1.18z" fill="#4285F4">
                    </path>
                    <path d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 01-7.18-2.54H1.83v2.07A8 8 0 008.98 17z" fill="#34A853">
                        </path><path d="M4.5 10.52a4.8 4.8 0 010-3.04V5.41H1.83a8 8 0 000 7.18l2.67-2.07z" fill="#FBBC05"></path>
                        <path d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 001.83 5.4L4.5 7.49a4.77 4.77 0 014.48-3.3z" fill="#EA4335"></path>
                        </svg> Login with google</button>
            <button className="github__btn"><FaGithub /> Login with GitHub</button>
            <button className="facebook__btn"><FaFacebook /> Login with Facebook</button>
            </div>
            
            <div className="manual__login">
                <label htmlFor="email" style={{fontWeight:'bold',fontSize:'14px',marginBottom:'5px'}}>Email</label>
                <input type="email" className='email'/>
                <div className="pass__label">
                <label htmlFor="password" style={{fontWeight:'bold',fontSize:'14px'}}>Password</label>
                <Link to="/">Forgot Password?</Link>
                </div>
               
                <input type="password" className='password'/>
                <button className="loginBtn">
                    <Link to="questions">
                    Log In
                    </Link>
                    
                    </button>
            </div>
            <div className="login__redirect">
                <div className='signup__refer'>Don’t have an account? <Link to="/"> Sign up</Link></div>
                <div className='employer__refer'>Are you an employer? <Link to="/">Sign up on Talent <FaExpandAlt /> </Link> </div>
            </div>
        </div>
        </div>
    )
}

export default Login
