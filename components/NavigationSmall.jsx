import React from 'react'

function NavigationSmall() {
  return (
    <div>

        
      <Navbar expand="lg" className="bg-body-light ">
        <Container fluid>
          <Navbar.Brand href="#"><Button variant="" onClick={handleShow}>
           <i class="fa-solid fa-bars fa-1x"></i>
        </Button>
  
        </Navbar.Brand>
          
          
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
             <div className='d-flex justify-content-center align-items-center'> 
              <img  style={{width:'15%'}} src="https://www.snitch.co.in/cdn/shop/files/blackoption.png?v=1659016547" alt="" /></div >
            
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
  )
}

export default NavigationSmall