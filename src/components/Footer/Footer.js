import React from 'react';
import './Footer.css';
//import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
     {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <button>Subscribe</button>
          </form>
        </div>
  </section>*/}
      <div className='footer-links'>
      <div className='footer-link-wrapper'>
        <div className="" style={{height:'40px',width:'50px'}}>
        <img src={require('../../assets/logo.png')} alt="" height="40px" style={{objectFit:'cover'}}/> 
        </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h4>STACK OVERFLOW</h4>
            <Link to='/sign-up'>Questions</Link>
            <Link to='/'>Jobs</Link>
            <Link to='/'>Developer Jobs Directory</Link>
            <Link to='/'>Salary Calculator</Link>
            <Link to='/'>Help</Link>
            <Link to='/'>Mobile</Link>
            <Link to='/'>Disable Responsiveness</Link>
          </div>
          <div className='footer-link-items'>
            <h4>PRODUCTS</h4>
            <Link to='/sign-up'>Teams</Link>
            <Link to='/'>Talent</Link>
            <Link to='/'>Advertising</Link>
            <Link to='/'>Enterprise</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h4>COMPANY</h4>
            <Link to='/'>about</Link>
            <Link to='/'>Press</Link>
            <Link to='/'>Work Here</Link>
            <Link to='/'>Legal</Link>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Contact Us</Link>
          </div>
          <div className='footer-link-items'>
            <h4>STOCK EXCHANGE NETWORK</h4>
            <Link to='/sign-up'>Technology</Link>
            <Link to='/'>Life/Arts</Link>
            <Link to='/'>Culture/Recreation</Link>
            <Link to='/'>Science</Link>
            <Link to='/'>Other</Link>
          </div>
        </div>
        <div className='footer-link-wrapper' style={{display:'flex',flexDirection:'column',width:'30%'}}>
          <div className='footer-link-items' style={{marginBottom:'5rem',marginTop:'14px',display:'flex',fontSize:'12px',flexDirection:'row',justifyContent:'space-between'}}>
            <Link to='/'>Blog</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Twitter</Link>
            <Link to='/'>LinkedIn</Link>
            <Link to='/'>Instagram</Link>
          </div>
          <div className='footer-link-items' style={{fontSize:"9px",marginTop:'5rem'}}>
            
            <Link to='/'>site design/logo 2020 Stack Exchange Inc; user contributions 
            licensed under cc by-sa. rev 2020.10.15.45947</Link>
            
          </div>
        </div>
      </div>
      {/*<section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TRVL
              <i class='fa fa-space-shuttle' />
            </Link>
          </div>
          <small class='website-rights'>TRVL © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fa fa-facebook' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fa fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fa fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fa fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fa fa-linkedin' />
            </Link>
          </div>
        </div>
</section>*/}
    </div>
  );
}

export default Footer;
