import React from 'react'
import CardImg from "../../../assets/CardPrivate.png" 
import style from "./CardPrivate.module.scss";

const CardPrivate = () => {
  return (
    <div className={style.CardPrivate}>

        <img src={CardImg} alt="" />

        <div className={style.txt}>
        <h3 className={style.h3_}>Настольная игра “Сказочное королевство” с дополненной
        реальностью, 6+</h3>

        {/* <br /> */}

        <div className={style.txt_2}>
         <p className={style.p_1}>Кол-во</p>   
         <p className={style.p_2}>Дата оформления</p>
         <p className={style.p_3}>Стоимость</p>
        </div>

        {/* <br /> */}

        <div className={style.txt_3}>
         <p className={style.p_4}>х1</p>
         <p className={style.p_5}>20.01.21</p>
         <p className={style.p_6}>2300₽</p>
        </div>
        <p className={style.p_7}>Оставить отзыв</p>

        </div>
        
    </div>
  )
}

export default CardPrivate
