import React from 'react'
import Card from 'react-bootstrap/Card';
import './Card.css'
function Card3() {
  return (
    <>
     <div className=' scroll ms-5  d-flex'>
     <div>
       <Card style={{ width: '19rem',marginLeft:'20px' }}>
        <Card.Img variant="top" src="https://www.snitch.co.in/cdn/shop/files/4MSS2364-01-M43.jpg?v=1696337750" />
        <Card.Img className='backimg' variant="top" src="https://www.snitch.co.in/cdn/shop/files/4MSS2364-01-M39.jpg?v=1696337750" />
        
      </Card>
      <p style={{fontSize:'15px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'20.8px',textAlign:'left',letterSpacing:'0.4px'}}>Chimera White Shirt</p>
      <p style={{fontSize:'13.6px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'17.68px',textAlign:'left',letterSpacing:'0.4px'}}>Rs. 999</p>
      
      
     </div>
    <div>
      <Card style={{ width: '19rem' ,marginLeft:'20px'}}>
        <Card.Img variant="top" src="https://www.snitch.co.in/cdn/shop/files/4MSS2364-02-M69.jpg?v=1696337783" />
        <Card.Img className='backimg' variant="top" src="https://www.snitch.co.in/cdn/shop/files/4MSS2364-02-M40.jpg?v=1696337806" />
        
      </Card>
      <p style={{fontSize:'16px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'20.8px',textAlign:'left',letterSpacing:'0.4px'}}>Chimera Biege Shirt</p>
      <p style={{fontSize:'13.6px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'17.68px',textAlign:'left',letterSpacing:'0.4px'}}>Rs. 999</p>
     
    </div>
    <div>
      <Card style={{ width: '19rem',marginLeft:'20px' }}>
        <Card.Img variant="top" src="https://www.snitch.co.in/cdn/shop/files/4MSS2364-03-M26.jpg?v=1696337867" />
        <Card.Img className='backimg' variant="top" src="https://www.snitch.co.in/cdn/shop/files/4MSS2364-03-M42.jpg?v=1696337867" />
        
      </Card>
      <p style={{fontSize:'16px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'20.8px',textAlign:'left',letterSpacing:'0.4px'}}>Chimera Sky Blue Shirt</p>
      <p style={{fontSize:'13.6px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'17.68px',textAlign:'left',letterSpacing:'0.4px'}}>Rs. 999</p>
     
    </div>
   <div>
      <Card style={{ width: '19rem',marginLeft:'20px' }}>
        <Card.Img variant="top" src="https://www.snitch.co.in/cdn/shop/files/4MSS2367-05-M38.jpg?v=1696337956" />
        <Card.Img className='backimg' variant="top" src="https://www.snitch.co.in/cdn/shop/files/4MSS2367-05-M47.jpg?v=1696337956" />
        
      </Card>
      <p style={{fontSize:'16px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'20.8px',textAlign:'left',letterSpacing:'0.4px'}}>Chimera Navy Shirt</p>
      <p style={{fontSize:'13.6px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'17.68px',textAlign:'left',letterSpacing:'0.4px'}}>Rs. 999</p>
     
   </div>
    
     </div>
    </>
  )
}

export default Card3