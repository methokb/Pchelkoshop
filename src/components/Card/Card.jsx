import React from "react";
import style from "./Card.module.scss";
import { Link } from "react-router-dom";

const Card = ({ img, title, data,subTitle, tag }) => {
  return (
    <div className={style.Card}>
      <div className={style.up}>
        <img width={118} height={118} src={img} alt="" className={style.action} />
        <div className={style.textUp}>
          <h2 >{title}</h2>
          <p>{data}</p>
        </div>
      </div>
      <div className={style.textCenter}>
        <p>{subTitle}</p>
      </div>
      <div className={style.textBottom}>
        <p>Теги:</p>
        <p className={style.p2}>{tag}</p>
      </div>
      <div className={style.path}>
        <h3> <Link to='/promotionPage'>Читать полностью</Link></h3>
      </div>
    </div>
  )
}

export default Card;
