import React from "react";
import style from "./Card.module.scss";
import { Link } from "react-router-dom";
<<<<<<< HEAD
const Card = ({ img, text, number }) => {
=======

const Card = ({ img, title, data, tag }) => {
>>>>>>> 894b465085409a29ab10624dcb121c72e634d61d
  return (
    <div className={style.Card}>
      <div className={style.up}>
        <img src={img} alt="" className={style.action} />
        <div className={style.textUp}>
          <h2>{title}</h2>
          <p>{data}</p>
        </div>
      </div>
      <div className={style.textCenter}>
        <p>
          Получите скидку -15% при оформлении группового заказа в период с 1
          января 2021 г.
          <br />
          <br />
          по 19 февраля 2021 г. Используйте промокод 
           <b className={style.b}> январь15</b> при оформлении заказа.
        </p>
      </div>
      <div className={style.textBottom}>
        <p>Теги:</p>
        <p className={style.p2}>{tag}</p>
      </div>
      <div className={style.path}>
<<<<<<< HEAD
        <h3>Читать полностью</h3>
=======
>>>>>>> 894b465085409a29ab10624dcb121c72e634d61d
        <h3> <Link to='/promotionPage'>Читать полностью</Link></h3>
      </div>
    </div>
  )
}

export default Card;
