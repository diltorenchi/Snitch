import React from 'react'
import Card from 'react-bootstrap/Card';
import './Card.css'
function Card1() {
  return (
    <>
     <div  className=' d-flex me-5 ms-3 scroll'>
     <div>
       <Card style={{ width: '15.5rem',marginLeft:'20px' }}>
        <Card.Img  variant="top" src="https://www.snitch.co.in/cdn/shop/files/4MSO4563-01-3214.jpg?v=1712045852" />
        <Card.Img className='backimg' variant="top" src="https://www.snitch.co.in/cdn/shop/files/4MSO4563-01-329.jpg?v=17120458952" />
        
      </Card>
      <p style={{fontSize:'15px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'20.8px',textAlign:'left',letterSpacing:'0.4px'}}>City Breeze White Cargo Pant</p>
      <p style={{fontSize:'13.6px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'17.68px',textAlign:'left',letterSpacing:'0.4px'}}>Rs. 1,599</p>
      
      
     </div>
    <div>
      <Card style={{ width: '15.5rem' ,marginLeft:'20px'}}>
        <Card.Img variant="top" src="https://www.snitch.co.in/cdn/shop/files/4MSK8580-01-M31.jpg?v=1712042185" />
        <Card.Img className='backimg' variant="top" src="https://www.snitch.co.in/cdn/shop/files/4MSK8580-01-M25.jpg?v=1712042210" />
        
      </Card>
      <p style={{fontSize:'16px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'20.8px',textAlign:'left',letterSpacing:'0.4px'}}>Wild Enough Brown Overshirt</p>
      <p style={{fontSize:'13.6px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'17.68px',textAlign:'left',letterSpacing:'0.4px'}}>Rs. 1,699</p>
     
    </div>
    <div>
      <Card style={{ width: '15.5rem',marginLeft:'20px' }}>
        <Card.Img variant="top" src="https://www.snitch.co.in/cdn/shop/files/4MSK8580-02-M56.jpg?v=1712042328" />
        <Card.Img className='backimg' variant="top" src="https://www.snitch.co.in/cdn/shop/files/4MSK8580-02-M8.jpg?v=1712042328" />
        
      </Card>
      <p style={{fontSize:'16px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'20.8px',textAlign:'left',letterSpacing:'0.4px'}}>Wild Enough Olive Overshirt</p>
      <p style={{fontSize:'13.6px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'17.68px',textAlign:'left',letterSpacing:'0.4px'}}>Rs. 1,699</p>
     
    </div>
   <div>
      <Card style={{ width: '15.5rem',marginLeft:'20px' }}>
        <Card.Img variant="top" src="https://www.snitch.co.in/cdn/shop/files/4MSK8580-03-M22.jpg?v=1712042382" />
        <Card.Img className='backimg' variant="top" src="https://www.snitch.co.in/cdn/shop/files/4MSK8580-03-M46.jpg?v=1712042382" />
        
      </Card>
      <p style={{fontSize:'16px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'20.8px',textAlign:'left',letterSpacing:'0.4px'}}>Wild Enough Green Overshirt</p>
      <p style={{fontSize:'13.6px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'17.68px',textAlign:'left',letterSpacing:'0.4px'}}>Rs. 1,699</p>
     
   </div>
    <div>
      <Card style={{ width: '15.5rem',marginLeft:'20px' }}>
        <Card.Img variant="top" src="https://www.snitch.co.in/cdn/shop/files/4MSS2735-05-M40.jpg?v=1712043728" />
        <Card.Img className='backimg' variant="top" src="https://www.snitch.co.in/cdn/shop/files/4MSS2735-05-M25.jpg?v=1712043728" />
        
      </Card>
      <p style={{fontSize:'16px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'20.8px',textAlign:'left',letterSpacing:'0.4px'}}>Patchwork Checks Blue Shirt</p>
      <p style={{fontSize:'13.6px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'17.68px',textAlign:'left',letterSpacing:'0.4px'}}>Rs. 1,199</p>
      
    </div>
     </div>
    </>
  )
}

export default Card1