import React from 'react'
import style from "./Reviews.module.scss"
import Irina from "../../assets/Irina.svg"
import star from "../../assets/star.svg"
const Reviews = () => {
  return (
    <div className={style.reviews}>
      <div className={style.reviewsContainer}>
        <div className={style.reviewsHeader}>
          <h1>Отзывы о наших играх</h1>
          <h3 className={style.reviewsHeaderH3}>Смотреть все отзывы</h3>
          <p>Последние отзывы</p>
        </div>
        <div className={style.reviewsIrina}>
          <div className={style.reviewsIrina_K}>
            <img src={Irina} alt="" />
            <div className={style.reviewsIrinaText}>
              <h2>Ирина Е.</h2>
              <p >10-09-20</p>
              <h1 className={style.reviewsIrinaH1}>5 <span className={style.reviewsIrinaSpan}>/5</span> <img src={star} alt="" /></h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Reviews