import React from 'react';
import './ProductCarousel.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; 
import { Link } from 'react-router-dom';
import CategoryBanner from '../CategoryBanner/CategoryBanner';
import {MdOutlineArrowBackIosNew,MdArrowForwardIos} from 'react-icons/md'


const Next = (props) =>{
    const {className,onClick} = props;
    return(
        <div className={className} onClick={onClick}>
            <MdArrowForwardIos 
            style={{color:'#000',fontSize:"25px",fontWeight:900}}
            />
        </div>
    )
}
const Prev = (props) =>{
    const {className,onClick} = props;
    return(
        <div className={className} onClick={onClick}>
        <MdOutlineArrowBackIosNew 
        style={{color:'#000',fontSize:"25px",fontWeight:900}}
        />
    </div>
    )
}

const ProductCarousel = ({BgImg,Title,Data}) => {
    const Settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
    };
  return (
    <div className='CategoryCarousel'>
        <div className="CategoryCarousel-left"
        style={{background:`url(${BgImg}) no-repeat 0px bottom`}}
        >
            <p className='CategoryCarousel-title'>{Title}</p>
            <button className='CategoryCarousel-btn'>View All</button>
        </div>
        <div className="CategoryCarousel-right">
            <Slider nextArrow={<Next/>} prevArrow={<Prev/>} {...Settings}>
                {
                    Data.map((item,index) => {
                        return(
                            <Link key={index} to='/product'>
                                <CategoryBanner
                                    Imgsrc={item.ImgSrc}
                                    Title={item.CategoryName}
                                    Brand={item.Brand}
                                />
                            </Link>
                        )
                    })
                }
            </Slider>
        </div>
    </div>
  )
}

export default ProductCarousel