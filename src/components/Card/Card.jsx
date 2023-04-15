import React from "react";
import style from "./Card.module.scss";

const Card = ({ img, text, number }) => {
  return (
    <div className={style.Card}>
      <div className={style.up}>
        <img src={img} alt="" className={style.action} />
        <div className={style.textUp}>
          <h2>{text}</h2>
          <p>{number}</p>
        </div>
      </div>
      <div className={style.textCenter}>
        <p>
          Получите скидку -15% при оформлении группового заказа в период с 1
          января 2021 г.
          <br />
          <br />
          по 19 февраля 2021 г. Используйте промокод{" "}
          <b className={style.b}>январь15</b> при оформлении заказа.
        </p>
      </div>
      <div className={style.textBottom}>
        <p>Теги:</p>
        <p className={style.p2}>акции и спец. предложения</p>
      </div>
      <div className={style.path}>
        <h3>Читать полностью</h3>
      </div>
    </div>
  );
};

export default Card;
