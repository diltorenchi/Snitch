import React from 'react'

function Carousals() {
  return (
    <>
    <div>
   <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
   <div class="carousel-indicators">
    <button type="button" className='round' data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" className='round' data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="1" aria-label="Slide 2"></button>
    
    
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.snitch.co.in/cdn/shop/files/Breezy-shirtr-Banner-web_1400x.webp?v=1711873681" alt="" class="d-block " width={'100%'} />
    </div>
    <div class="carousel-item">
      <img src="https://www.snitch.co.in/cdn/shop/files/New-in-discover-your-style-banner-web_1400x.webp?v=1711873682" alt="" class="d-block " width={'100%'} />
    </div>
   
  </div>
</div>

   </div>
    </>
  )
}

export default Carousals