import React from 'react';
import style from './Footer.module.scss';
import insta from '../../assets/instagram.svg';
import wats from '../../assets/whats.svg';
import telg from '../../assets/telegram.svg';
import tel from '../../assets/phone.svg';
import lup from '../../assets/headerLupa.svg';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <div className={style.footer}>
        <div className={style.footerYellow}>
          <div className={style.footerCenter}>
            <div className={style.footerCenterAll}>
              <div className={style.footerCenterAllOne}>
                <h2 className={style.footerCenterAllP}>л о г о т и п</h2>
                <p className={style.styleStop}>8(000) 000 00 00 МСК (9-21)</p>
                <p className={style.styleStopC}>pchelkashop.ru@mail.ru</p>
                <div className={style.footerCenterAllInput}>
                  <input
                    placeholder="Поиск по сайту...."
                    className={style.footerCenterAllInputI}
                    type="text"
                  />
                  <img className={style.lupa} src={lup} alt="" />
                </div>
              </div>
              <div className={style.lists}>
                <ul className={style.firstList}>
                  <li>Акции и новости</li>
                  <li>Игры для праздника</li>
                  <li>Развивающие игры</li>
                  <li>Игры в дорогу</li>
                </ul>
                <ul className={style.firstList}>
                  <li>Отзывы</li>
                  <li>Доставка и оплата</li>
                  <li>Возврат</li>
                  <li>О нас</li>
                  <Link style={{ color: '#fff', textDecoration: 'none' }} to={'/contact'}>
                    <li>Контакты</li>
                  </Link>
                  <li>Документы</li>
                </ul>
                <div className={style.firstList}>
                  <ul>
                    <li>Личный кабинет</li>
                    <li>Партнерам</li>
                    <li>Групповой заказ</li>
                    <li>Постоянный покупатель</li>
                  </ul>
                  <div className={style.socials}>
                    <img src={insta} alt="" />
                    <img src={wats} alt="" />
                    <img src={tel} alt="" />
                    <img src={telg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.footerEnd}></div>
      </div>
    </>
  );
};

export default Footer;
