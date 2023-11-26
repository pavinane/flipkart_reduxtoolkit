import React from 'react';
import './CategoryBanner.scss';

function CategoryBanner({Imgsrc,Title,Brand}) {
  return (
    <div className='CategoryBanner'>
        <img src={Imgsrc} alt="" className='CategoryBanner-img' />
        <p className='CategoryBanner-title'>
            {Title.length > 25 ? Title: Title.slice(0,15) + '...'}
        </p>
        <p className='CategoryBanner-Shop'>Shop Now</p>
        <p className='CategoryBanner-Brand'>{Brand}</p>
    </div>
  )
}

export default CategoryBanner