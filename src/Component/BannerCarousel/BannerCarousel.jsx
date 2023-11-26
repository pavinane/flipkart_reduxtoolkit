import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; 
import './BannerCarousel.scss';

function BannerCarousel({data}) {
    const Settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      };
  return (
    <div className='BannerCarousel'>
        <Slider {...Settings}>
            {
                data.map((item) => {
                    return(
                        <div key={item.id}>
                            <img src={item.Imgsrc} alt="" className='BannerCarousel_Image' />
                        </div>
                    )
                })
            }
        </Slider>
    </div>
  )
}

export default BannerCarousel