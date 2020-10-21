import React from 'react'
import Recaptcha from 'react-recaptcha';

const Captcha = () => {
const callback=()=>{

}
    return (
        
        <Recaptcha
        style={{width:'150px !important',height:'50px'}}
    sitekey="6LeRydYZAAAAACrMYrycBXOYtGkTyn1f6IwEAm1D"
    render="explicit"
    onloadCallback={callback}
  />
      
    )
}

export default Captcha
