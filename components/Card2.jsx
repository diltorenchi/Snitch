import React from 'react';

function Card2() {
  return (
    <>
      <h2 style={{ fontFamily: 'Futura, sans-serif', fontSize: '30.6px', lineHeight: '30.6px', textAlign: 'center', fill: 'black', marginBottom: '40px' }}>SEASONAL FAV'S🌤️</h2>

      <div className='d-flex flex-wrap justify-content-center align-items-center'> 
        <div className="card1 m-3">
          <img className='img1' src="https://www.snitch.co.in/cdn/shop/files/4MST2235-01-M24.jpg?v=1704366399&width=540" alt="" />
          <div className="intro">
            <h2>ESSENTIALS</h2>
          </div>
        </div>

        <div className="card1 m-3">
          <img className='img1' src="https://www.snitch.co.in/cdn/shop/files/4MST2279-01-M18.jpg?v=1711628698&width=720" alt="" />
          <div className="intro">
            <h2>OVERSIZED</h2>
          </div>
        </div>

        <div className="card1 m-3">
          <img className='img1' src="https://www.snitch.co.in/cdn/shop/files/4MSC4011-05-3211.jpg?v=1710399720&width=720" alt="" />
          <div className="intro">
            <h2>CHINOS</h2>
          </div>
        </div>

        <div className="card1 m-3">
          <img className='img1' src="https://www.snitch.co.in/cdn/shop/files/4MSO4542-01-3219.jpg?v=1708069157&width=720" alt="" />
          <div className="intro">
            <h2>CARGOS</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card2;
