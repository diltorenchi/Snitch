import { faFacebook, faInstagram, faLinkedin, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TextField } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <>


    <hr />


    {/* <div className="row">
    <div className="col-md-3">
      <h6 style={{fontSize:'12.8px', lineHeight:'12.8px' , letterSpacing:'3.84px'}}>OFFLINE STORE</h6>

      <div className='mt-4'>
        <a style={{fontFamily:"Twentieth Century, sans-serif", fontSize:'13.6px' , lineHeight:'19.04px', letterSpacing:'0.4px', color:'black'
}} href="">Find Stores Near Me</a>
      </div>
    </div>
    <div className="col-md-3">
      <h4 style={{fontSize:'12.8px', lineHeight:'12.8px', letterSpacing:'3.84px'}}>GET TO KNOW US</h4>

      <div className='mt-4  '>
        <h4 style={{fontSize:'13.6px', lineHeight:'19.04px',letterSpacing:'0.4px'}}>Contact Us</h4>
        <h4 style={{fontSize:'13.6px', lineHeight:'19.04px',letterSpacing:'0.4px'}}>FAQ's</h4>
        <h4 style={{fontSize:'13.6px', lineHeight:'19.04px',letterSpacing:'0.4px'}}>Blogs</h4>
        <h4 style={{fontSize:'13.6px', lineHeight:'19.04px',letterSpacing:'0.4px'}}>Terms & Conditions</h4>
      </div>
    </div>
    <div className="col-md-3">
      <h4 style={{fontSize:'12.8px', lineHeight:'12.8px' , letterSpacing:'3.84px'}}>TRACK OR <br /> RETURN/EXCHANGE ORDER</h4>

      <div className='mt-4'>
        <h4 style={{fontSize:'13.6px', lineHeight:'19.04px', letterSpacing:'0.4px'}}>TRACK ORDER</h4>
        <h4 style={{fontSize:'13.6px', lineHeight:'19.04px', letterSpacing:'0.4px'}}>PLACE RETURN/EXCHANGE REQUEST</h4>
        <h4 style={{fontSize:'13.6px', lineHeight:'19.04px', letterSpacing:'0.4px'}}>RETURNS/EXCHANGE POLICY</h4>
      </div>
    </div>
    <div className="col-md-3">
      <h4 style={{fontSize:'12.8px', lineHeight:'12.8px', letterSpacing:'3.84px'}}>CUSTOMER CARE</h4>

      <div className='mt-4'>
        <h6 style={{fontSize:'13.6px',lineHeight:'19.04px',letterSpacing:'0.4px'}}>Timings: 10 AM - 7 PM (Mon - Sat) <br />
        Whatsapp : +91 6366966283 <br />
        Instagram:@snitch.co.in
        </h6>
        
      </div>
    </div>
   </div>  */}

   <div className='ms-5 mt-5'>
    <h3 style={{fontSize:'12.8px',lineHeight:'12.8px', letterSpacing:'3.84px'}}>SIGN UP AND SAVE</h3>

    <div className='mt-4'>
      <h3 style={{fontSize:'13.6px',lineHeight:'19.04px',letterSpacing:'0.4px'}}>Sign up now and be the first to know about exclusive offers, latest fashion trends & style tips!</h3>
    </div>

    <div className='mt-4 mb-4'>
    <TextField id="standard-basic" label="Enter your email " variant="standard" />
    < FontAwesomeIcon className='mt-4' icon={faEnvelope} />
    </div>

    <div >
    <FontAwesomeIcon icon={faInstagram} size="2xl" style={{marginRight:'10px'}} />
    <FontAwesomeIcon icon={faFacebook} size="2xl" style={{marginRight:'10px'}}  />
    <FontAwesomeIcon icon={faYoutube} size="2xl" style={{marginRight:'10px'}}  />
    <FontAwesomeIcon icon={faTwitter} size="2xl" style={{marginRight:'10px'}}  />
    <FontAwesomeIcon icon={faPinterest} size="2xl" style={{marginRight:'10px'}}  />
    <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{marginRight:'10px'}}  />
    </div>





   </div>

   <div className='text-center'>
    <h3 style={{fontFamily:'Twentieth Century, sans-serif', fontSize:'12px', lineHeight:'16.8px', letterSpacing:'0.4px'}}>© 2024 SNITCH <br /> Made in India, for the World  🌍</h3>
   </div>
    
    </>
  )
}

export default Footer