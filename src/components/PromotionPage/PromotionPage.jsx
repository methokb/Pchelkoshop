import React from 'react'
import action from '../../assets/Group 243.svg'
import style from './PromotionPage.module.scss'
import { Link } from 'react-router-dom'
import img1 from '../../assets/strelka.svg'
const PromotionPage = () => {
  return (
    <div className={style.promotionPage}>
        <div className={style.page}>
        <div className={style.Header}>
      <div className={style.headerText}>
        <p><Link to='/'>Главная</Link></p>
        <img src={img1} alt="" />
        <p>Акции</p>
        <img src={img1} alt="" />
        <p>Скидка -15% на групповой заказ</p>
      </div>
    </div>
    <p className={style.line1}></p>
    <div className={style.podblock}>
            <div className={style.h1}>
                <h1>Скидка -15% на групповой заказ</h1>
            </div>
            <div className={style.h2}>
                <h2>Сроки проведения: 1 января-19 февраля 2021г.</h2>
            </div>
            <div className={style.base}>
                <div className={style.img}>
                <img src={action} alt="" className={style.actionImg}/>
                </div>
                <div className={style.textBase}>
                    <div className={style.block1}>
                    <div className={style.title}>Описание</div>
                    <div className={style.subTitle}>
                    Получите скидку -15% при оформлении группового заказа в период с 1 января 2021 г. по 19 февраля 2021 г.
                    Идейные соображения высшего порядка, а также консультация с широким активом позволяет оценить значение существенных финансовых
                    и административных условий. Задача организации, в особенности же консультация с широким активом требуют от нас анализа модели развития. 
                    Задача организации, в особенности же рамки и место обучения кадров требуют определения и уточнения позиций, занимаемых участниками в отношении
                    поставленных задач. Не следует, однако забывать, что укрепление и развитие структуры представляет собой интересный эксперимент проверки модели развития.
                    </div>
                    </div>
                    <div className={style.block2}>
                    <div className={style.title2}>Условия</div>
                    <div className={style.subTitle2}>Идейные соображения высшего порядка,
                     а также консультация с широким активом позволяет оценить значение существенных
                    финансовых и административных условий.</div>
                    </div>
                </div>
            </div>
            </div>
            <p className={style.line2}></p>
        </div>
    </div>
  )
}

export default PromotionPage