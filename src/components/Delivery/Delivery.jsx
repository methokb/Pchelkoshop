import React, { useEffect, useRef } from "react";
import style from "./Delivery.module.scss";
import img from "../../assets/strelka.svg";
import one from "../../assets/1.svg";
import two from "../../assets/2.svg";
import three from "../../assets/3.svg";
import { Link } from "react-router-dom";
import { Link as Linkk } from 'react-scroll';
const Delivery = () => {
  const scrollRef = useRef();

  useEffect(() => {

  }, [])

  return (
    <div className={style.delivery}>
      <div className={style.deliverys}>
        <div className={style.routing}>
          <div className={style.routingText}>
            <p>
              <Link to="/">Главная</Link>
            </p>
            <img src={img} alt="" />
            <p>Доставка и оплата</p>
          </div>
        </div>
        <div className={style.title}>
          <h1>Доставка и оплата</h1>
        </div>
        <div className={style.menu}>
          <ul>
            <li className={style.menuParent}>Доставка</li>
            <Linkk to='return'><li className={style.menuParent}>Возврат</li></Linkk>
            <li className={style.menuParent}>Оплата</li>
          </ul>
        </div>
        <div className={style.getProduct}>
          <h1>Способы получить товар</h1>
          <div className={style.options}>
            <div className={style.one}>
              <img src={one} alt="" />
              <p>Заказать на сайте с доставкой Почтой России</p>
            </div>
            <div className={style.two}>
              <img src={two} alt="" />
              <p>Заказать на сайте с доставкой Сдэк до двери или до склада</p>
            </div>
            <div className={style.three}>
              <img src={three} alt="" />
              <p>Наша курьерская доставка по г. Славянск-на-Кубани </p>
            </div>
          </div>
        </div>
        <div className={style.commonBlock}>
          <div className={style.block1}>
            <h1>1. Заказать на сайте с доставкой Почтой России</h1>
            <p>Заказ товара осуществляется на нашем сайте *ссылка*, либо по телефону *телефон*.
              После оформления заказа с Вами свяжется наш оператор для подтверждения заказа и сверки данных.
              Примечание: при покупке по телефону заказ подтверждается устно с оператором.</p>
          </div>
          <div className={style.block2}>
            <h1>2. Заказать на сайте с доставкой Сдэк до двери или до склада</h1>
          </div>
          <div className={style.block3}>
            <h1>3. Наша курьерская доставка по г. Славянск-на-Кубани </h1>
          </div>
        </div>
        <div id='return' ref={scrollRef} className={style.return}>
          <h1>Возврат</h1>
          <p>Товары, реализуемые в нашем интернет-магазине, соответствуют всем требованиям и имеют все необходимые документы и сертификаты.</p>
        </div>
        <div className={style.payment}>
          <h1>Оплата заказа</h1>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
