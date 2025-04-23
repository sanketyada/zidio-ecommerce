import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MaincaroselData } from './MaincaroselData';

function MainCarosel() {
    const items = MaincaroselData.map((item)=> <img className='cursor-pointer'
    role='presentaton' src={item.image} alt=""/>)
  return (
        <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        />
  )
}

export default MainCarosel
// import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// 



// const items = [
//     <div className="item" data-value="1">1</div>,
//     <div className="item" data-value="2">2</div>,
//     <div className="item" data-value="3">3</div>,
//     <div className="item" data-value="4">4</div>,
//     <div className="item" data-value="5">5</div>,
// ];

// const MainCarosel = () => (
//     <AliceCarousel
//         mouseTracking
//         items={items}
//         controlsStrategy="alternate"
//     />
// );
// export default MainCarosel;

