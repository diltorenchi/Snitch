import React, { useEffect } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function NavigationBar() {
    const [show, setShow] = useState(false);

    const [navba,setNavba] = useState(false)

    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        if(window.scrollY>600){
          setNavba(true)
        }
        else{
          setNavba(false)
        }
      })
    })
   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
  return (
    <>
<div className={`${navba && 'navbar'} nav `} >

  
  
      <Navbar expand="lg" className="bg-body-light ">
        <Container fluid>
          <Navbar.Brand href="#"><Button variant="" onClick={handleShow}>
           <i class="fa-solid fa-bars fa-1x"></i>
        </Button>

        <img className='navimg' src="https://www.snitch.co.in/cdn/shop/files/blackoption.png?v=1659016547" alt="" />
        
             
              
  
        </Navbar.Brand>
          
          
          <Navbar.Collapse id="navbarScroll">
            <Nav
            
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              
             {/* <div className='d-flex justify-content-center align-items-center'> 
              <img  style={{width:'15%'}} src="https://www.snitch.co.in/cdn/shop/files/blackoption.png?v=1659016547" alt="" /></div >
             */}
            </Nav>
             <div className='d-flex'>
              <i style={{marginRight:'20px'}} class="fa-regular fa-user fa-1x"></i>
              <i style={{marginRight:'20px'}} class="fa-solid fa-magnifying-glass fa-1x"></i>
              <i style={{marginRight:'20px'}} class="fa-regular fa-heart fa-1x"></i>
              <i style={{marginRight:'20px'}} class="fa-solid fa-bag-shopping fa-1x"></i>
              <i class="fa-solid fa-camera fa-1x"></i>
             
              </div>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
</div>
<Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <div className="bg-body-light"><i style={{fontSize:'17px'}}  class="fa-regular fa-user fa-1x"> LOG IN</i></div>
              
              </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <hr />
          <h4 style={{fontFamily:'"Twentieth Century", sans-serif',fontSize:'17.6px',lineHeight:'24.64px',letterSpacing:'3.52px'}}>NEW ARRIVALS</h4>
          <hr />
          <h4 style={{fontFamily:'"Twentieth Century", sans-serif',fontSize:'17.6px',lineHeight:'24.64px',letterSpacing:'3.52px'}}>BEST SELLING</h4>
          <hr />
          <h4 style={{fontFamily:'"Twentieth Century", sans-serif',fontSize:'17.6px',lineHeight:'24.64px',letterSpacing:'3.52px'}}>SNITCH LUXE</h4>
          <hr />
          <h4 style={{fontFamily:'"Twentieth Century", sans-serif',fontSize:'17.6px',lineHeight:'24.64px',letterSpacing:'3.52px'}}>SNITCH PLUS</h4>
          <hr />
          <h4 style={{fontFamily:'"Twentieth Century", sans-serif',fontSize:'17.6px',lineHeight:'24.64px',letterSpacing:'3.52px'}}>SHOP
          <KeyboardArrowDownIcon style={{marginLeft:'250px'}} className='lists2' fontSize='large' />
          </h4>
          <hr />
          <h4 style={{fontFamily:'"Twentieth Century", sans-serif',fontSize:'17.6px',lineHeight:'24.64px',letterSpacing:'3.52px'}}>TRACK ORDER</h4>
          <hr />
          <h4 style={{fontFamily:'"Twentieth Century", sans-serif',fontSize:'17.6px',lineHeight:'24.64px',letterSpacing:'3.52px'}}>PLACE A RETURN / EXCHANGE REQUEST</h4>
          <hr />
          <h4 style={{fontFamily:'"Twentieth Century", sans-serif',fontSize:'17.6px',lineHeight:'24.64px',letterSpacing:'3.52px'}}>BECOME OUR BRAND AMBASSADOR</h4>
          <hr />
          <h4 style={{fontFamily:'"Twentieth Century", sans-serif',fontSize:'17.6px',lineHeight:'24.64px',letterSpacing:'3.52px'}}>AFFILIATE PROGRAM</h4>
          <hr />
          <h4 style={{fontFamily:'"Twentieth Century", sans-serif',fontSize:'17.6px',lineHeight:'24.64px',letterSpacing:'3.52px'}}>CUSTOMER SUPPORT</h4>
          <hr />
          <h4 style={{fontFamily:'"Twentieth Century", sans-serif',fontSize:'17.6px',lineHeight:'24.64px',letterSpacing:'3.52px'}}>VISIT STORE</h4>
          <hr />
          <h4 style={{fontFamily:'"Twentieth Century", sans-serif',fontSize:'17.6px',lineHeight:'24.64px',letterSpacing:'3.52px'}}>RELOVE</h4><hr />
          <div className='d-flex justify-content-between m-5'>
            <div className='d-flex  ' style={{fontSize:'16px',lineHeight:'22.4px',letterSpacing:'0.4px',textAlign:'center'}}>
            <i class="fa-brands fa-instagram fa-2x"></i>
           
            </div>
            <div className='d-flex  ' style={{fontSize:'16px',lineHeight:'22.4px',letterSpacing:'0.4px',textAlign:'center'}}>
            <i class="fa-brands fa-facebook fa-2x"></i>
         
          </div>
          <div className='d-flex  ' style={{fontSize:'16px',lineHeight:'22.4px',letterSpacing:'0.4px',textAlign:'center'}}>
          <i class="fa-brands fa-youtube fa-2x"></i>
         
          </div>
         
            <div className='d-flex ' style={{fontSize:'16px',lineHeight:'22.4px',letterSpacing:'0.4px',textAlign:'center'}}>
            <i class="fa-brands fa-twitter fa-2x"></i>
           
            </div>
            <div className='d-flex  ' style={{fontSize:'16px',lineHeight:'22.4px',letterSpacing:'0.4px',textAlign:'center'}}>
            <i class="fa-brands fa-pinterest fa-2x"></i>
           
            </div>
            <div className='d-flex' style={{fontSize:'16px',lineHeight:'22.4px',letterSpacing:'0.4px',textAlign:'center'}}>
            <i class="fa-brands fa-linkedin fa-2x"></i>
           
            </div>
        
          </div>
         
          </Offcanvas.Body>
        </Offcanvas>
    </>
  )
}

export default NavigationBar