import React from 'react'
import Card from 'react-bootstrap/Card';
import './Card.css'
function Card4() {
  return (
    <>
    <div  className='container scroll  d-flex m-4'>
     <div>
       <Card style={{ width: '19rem',marginLeft:'20px' }}>
        <Card.Img variant="top" src="https://www.snitch.co.in/cdn/shop/files/4MSH7012-07-328.jpg?v=1711517032" />
        <Card.Img className='backimg' variant="top" src="https://www.snitch.co.in/cdn/shop/files/4MSH7012-07-3211.jpg?v=1711517032" />
        
      </Card>
      <p style={{fontSize:'15px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'20.8px',textAlign:'left',letterSpacing:'0.4px'}}>Streamlined Maroon Shorts</p>
      <p style={{fontSize:'13.6px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'17.68px',textAlign:'left',letterSpacing:'0.4px'}}>Rs. 999</p>
      
      
     </div>
    <div>
      <Card style={{ width: '19rem' ,marginLeft:'20px'}}>
        <Card.Img variant="top" src="https://www.snitch.co.in/cdn/shop/files/4MSH7012-06-3236.jpg?v=1711516721" />
        <Card.Img className='backimg' variant="top" src="https://www.snitch.co.in/cdn/shop/files/4MSH7012-06-3230.jpg?v=1711516721" />
        
      </Card>
      <p style={{fontSize:'16px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'20.8px',textAlign:'left',letterSpacing:'0.4px'}}>Streamlined Olive Shorts  </p>
      <p style={{fontSize:'13.6px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'17.68px',textAlign:'left',letterSpacing:'0.4px'}}>Rs. 999</p>
     
    </div>
    <div>
      <Card style={{ width: '19rem',marginLeft:'20px' }}>
        <Card.Img variant="top" src="https://www.snitch.co.in/cdn/shop/files/4MSH7012-05-3210.jpg?v=1711516536" />
        <Card.Img className='backimg' variant="top" src="https://www.snitch.co.in/cdn/shop/files/4MSH7012-05-3215.jpg?v=1711516536" />
        
      </Card>
      <p style={{fontSize:'16px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'20.8px',textAlign:'left',letterSpacing:'0.4px'}}>Streamlined Navy Shorts</p>
      <p style={{fontSize:'13.6px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'17.68px',textAlign:'left',letterSpacing:'0.4px'}}>Rs. 999</p>
     
    </div>
   <div>
      <Card style={{ width: '19rem',marginLeft:'20px' }}>
        <Card.Img variant="top" src="https://www.snitch.co.in/cdn/shop/files/4MSH7012-04-3214.jpg?v=1711516306" />
        <Card.Img className='backimg' variant="top" src="https://www.snitch.co.in/cdn/shop/files/4MSH7012-04-3224.jpg?v=1711516306" />
        
      </Card>
      <p style={{fontSize:'16px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'20.8px',textAlign:'left',letterSpacing:'0.4px'}}>Streamlined Black Shorts</p>
      <p style={{fontSize:'13.6px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'17.68px',textAlign:'left',letterSpacing:'0.4px'}}>Rs. 999</p>
     
   </div>
    
     </div>
    </>

  )
}

export default Card4