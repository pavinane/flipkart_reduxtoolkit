import React from 'react';
import './CategoryBar.scss';

function CategoryBar({imgscr,CategoryName}) {
  return (
    <div className="CategoryBar">
        <div className="CategoryBar_img">
            <img src={imgscr} alt="cateImg" />
        </div>
        <p className='categoryBar-name'>{CategoryName}</p>
    </div>
  )
}

export default CategoryBar