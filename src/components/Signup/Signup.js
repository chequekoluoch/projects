import React from 'react'
import './Signup.css'
import logo from '../../assets/logo.png'
import { FaFacebook, FaGithub,FaQuestionCircle } from 'react-icons/fa';
import Captcha from '../Captcha/Captcha';
import { Link } from 'react-router-dom';
//import Captcha from '../Captcha/Captcha';

const Signup = () => {
    return (
        <div className="container">
        <div className="wrapper">
        <div className="left__cont">
            <div className="div1"><p>Join the Stack Overflow community</p></div>
            <div className="div2">
            <svg className="svgIcon" width="26" height="26" class="svg-icon mtn2"><path opacity=".5" d="M4.2 4H22a2 2 0 012 2v11.8a3 3 0 002-2.8V5a3 3 0 00-3-3H7a3 3 0 00-2.8 2z"></path><path d="M1 7c0-1.1.9-2 2-2h18a2 2 0 012 2v12a2 2 0 01-2 2h-2v5l-5-5H3a2 2 0 01-2-2V7zm10.6 11.3c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2c-.6 0-1.2.4-1.2 1.2 0 .7.5 1.1 1.2 1.2zm2.2-5.4l1-.9c.3-.4.4-.9.4-1.4 0-1-.3-1.7-1-2.2-.6-.5-1.4-.7-2.4-.7-.8 0-1.4.2-2 .5-.7.5-1 1.4-1 2.8h1.9v-.1c0-.4 0-.7.2-1 .2-.4.5-.6 1-.6s.8.1 1 .4a1.3 1.3 0 010 1.8l-.4.3-1.4 1.3c-.3.4-.4 1-.4 1.6 0 0 0 .2.2.2h1.5c.2 0 .2-.1.2-.2l.1-.7.5-.7.6-.4z"></path></svg>
                <span>Get unstuck — ask a question</span></div>
            <div className="div3">
            <svg className="svgIcon" width="26" height="26" class="svg-icon mtn2"><path d="M12 .7a2 2 0 013 0l8.5 9.6a1 1 0 01-.7 1.7H4.2a1 1 0 01-.7-1.7L12 .7z"></path><path opacity=".5" d="M20.6 16H6.4l7.1 8 7-8zM15 25.3a2 2 0 01-3 0l-8.5-9.6a1 1 0 01.7-1.7h18.6a1 1 0 01.7 1.7L15 25.3z"></path></svg>
                <span>Unlock new privileges like voting and commenting</span></div>
            <div className="div4">
            <svg className="svgIcon" width="26" height="26" class="svg-icon mtn2"><path d="M12 .7a2 2 0 013 0l8.5 9.6a1 1 0 01-.7 1.7H4.2a1 1 0 01-.7-1.7L12 .7z"></path><path opacity=".5" d="M20.6 16H6.4l7.1 8 7-8zM15 25.3a2 2 0 01-3 0l-8.5-9.6a1 1 0 01.7-1.7h18.6a1 1 0 01.7 1.7L15 25.3z"></path></svg>
                <span>Save your favorite tags, filters, and jobs</span></div>
            <div className="div5">
            <svg className="svgIcon" width="26" height="26" class="svg-icon mtn2"><path d="M21 4V2H5v2H1v5c0 2 2 4 4 4v1c0 2.5 3 4 7 4v3H7s-1.2 2.3-1.2 3h14.4c0-.6-1.2-3-1.2-3h-5v-3c4 0 7-1.5 7-4v-1c2 0 4-2 4-4V4h-4zM5 11c-1 0-2-1-2-2V6h2v5zm11.5 2.7l-3.5-2-3.5 1.9L11 9.8 7.2 7.5h4.4L13 3.8l1.4 3.7h4L15.3 10l1.4 3.7h-.1zM23 9c0 1-1 2-2 2V6h2v3z"></path></svg>
                <span>Earn reputation and badges</span></div>
            
                <div className="inner__div1">Use the power of Stack Overflow inside your organization.</div>
                <div className="inner__div2">Try a <Link to="/">free trial of Stack Overflow for Teams.</Link> </div>
           
            
        </div>

        <div className='signup__container'>
            <div className="logo">
            <img src={logo} alt="logo"/>
            </div>
            <div className="other__signups">
            <button className="google__btn">
            <svg aria-hidden="true" class="native svg-icon iconGoogle" width="18" height="18" viewBox="0 0 18 18">
                <path d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 002.38-5.88c0-.57-.05-.66-.15-1.18z" fill="#4285F4">
                    </path>
                    <path d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 01-7.18-2.54H1.83v2.07A8 8 0 008.98 17z" fill="#34A853">
                        </path><path d="M4.5 10.52a4.8 4.8 0 010-3.04V5.41H1.83a8 8 0 000 7.18l2.67-2.07z" fill="#FBBC05"></path>
                        <path d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 001.83 5.4L4.5 7.49a4.77 4.77 0 014.48-3.3z" fill="#EA4335"></path>
                        </svg> Signup with google</button>
            <button className="github__btn"><FaGithub /> Signup with GitHub</button>
            <button className="facebook__btn"><FaFacebook /> Signup with Facebook</button>
            </div>
            
            <div className="manual__signup">
                <label htmlFor="email" style={{fontWeight:'bold',fontSize:'14px',marginBottom:'5px'}}>Display Name</label>
                <input type="text" className='name'/>
                <label htmlFor="email" style={{fontWeight:'bold',fontSize:'14px',marginBottom:'5px'}}>Email</label>
                <input type="email" className='email'/>
                <div className="pass__label">
                <label htmlFor="password" style={{fontWeight:'bold',fontSize:'14px'}}>Password</label>
                <Link to="/">Forgot Password?</Link>
                </div>
               
                <input type="password" className='password'/>

                <div className="passwarn">
            Passwords must contain at least eight characters, including at least 1 letter and 1 number.
            </div>
             <div className="captcha">
                <Captcha />
             </div>
             <div className="condition" style={{margin:'12px 0'}}>
                 <input type="checkbox"/>
                 <div style={{fontSize:'13px',marginRight:'6px'}}>Opt-in to receive occasional product updates,
                      user research invitations, company announcements, and digests.
                  </div>
                  <div className="qmark">
                  <FaQuestionCircle/>
                  </div>
                  
             </div>
                <button className="signupBtn">Sign up</button>

                <div className="signup__redirect">
                <div className='login__refer'>
                By clicking “Sign up”, you agree to our <span><Link to="/">terms of service,</Link></span>
                    <span><Link to="/"> privacy policy</Link></span> and
                    <span><Link to="/"> cookie policy</Link></span>
                   </div>
                   
                
            </div>
            </div>
            
           
        </div>

       </div> 
        </div>
    )
}

export default Signup
