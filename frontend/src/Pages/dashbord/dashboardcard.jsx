import React from 'react'
import style from './style.module.css'

function Dashboardcard({price, description, image, title, startingdate, endingdate, completion, daysleft}) {
  return (
    <div className={style.dashboardcard}>
        <div className={style.top}>
            <img src={image} alt="image" />
            <span>{title}</span>
            <span>{price}</span>
        </div>

        <div className={style.mid}>
            <span>{daysleft} days left</span>
            <span>{completion}</span>
        </div>
        <div className={style.progressbar}>
          <div className={style.progress} style={{width:completion}}/>
        </div>
        <div className={style.bottom}>
            <span>{startingdate}</span>
            <span>{endingdate}</span>
        </div>

    </div>
  );
}

export default Dashboardcard