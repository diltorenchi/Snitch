import React from 'react'
import Card from 'react-bootstrap/Card';
function Card6() {
  return (
    <>
    <h4 style={{fontSize:'15px',lineHeight:'21px',letterSpacing:'0.4px',fontFamily:'Jost',fill:'3d4246'}} className='justify-content-center align-items-center d-flex mt-5'>Recently Stalked</h4>

    <div className='container justify-content-center align-items-center d-flex mt-5'>
     <div>
       <Card style={{ width: '21rem',marginLeft:'20px' }}>
        <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSN1310-14-M32.jpg?v=1710412712" />
        
      </Card>
      <p style={{fontSize:'15px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'20.8px',textAlign:'left',letterSpacing:'0.4px'}}>Octet Light Pink Shirt</p>
      <p style={{fontSize:'13.6px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'17.68px',textAlign:'left',letterSpacing:'0.4px'}}>Rs. 1,999</p>
      
      
     </div>
    <div>
      <Card style={{ width: '21rem' ,marginLeft:'20px'}}>
        <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0420/7073/7058/products/Dimmy_Augusto1356.jpg?v=1681302476" />
        
      </Card>
      <p style={{fontSize:'16px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'20.8px',textAlign:'left',letterSpacing:'0.4px'}}>Minime Green Shirt</p>
      <p style={{fontSize:'13.6px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'17.68px',textAlign:'left',letterSpacing:'0.4px'}}>Rs. 1,299</p>
     
    </div>
    <div>
      <Card style={{ width: '21rem',marginLeft:'20px' }}>
        <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSD3654-04-3042.jpg?v=1710398515" />
        
      </Card>
      <p style={{fontSize:'16px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'20.8px',textAlign:'left',letterSpacing:'0.4px'}}>Cosmic Brown Baggy Fit Jeans</p>
      <p style={{fontSize:'13.6px',marginLeft:'20px', fontFamily:'"Twentieth Century", sans-serif' ,lineHeight:'17.68px',textAlign:'left',letterSpacing:'0.4px'}}>Rs. 1,799</p>
     
    </div>
  
    
     </div>
    </>
  )
}

export default Card6    