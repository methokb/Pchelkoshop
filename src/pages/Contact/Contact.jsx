import React from 'react';
import style from './Contact.module.scss';
import call from '../../assets/call.svg';
import email from '../../assets/email.svg';
import inst from '../../assets/inst.svg';
import tg from '../../assets/tg.svg';
import viber from '../../assets/viber.svg';
import whatsapp from '../../assets/whatsapp.svg';

const Contact = () => {
  return (
    <div className={style.container}>
      <div className={style.contact}>
        <div className={style.contacts}>
          <h2>Контакты</h2>
          <b className={style.number}>
            <img src={call} alt="Call" /> 8 (000) 000 00 00
          </b>
          <div className={style.email}>
            <p>Вопросы, замечания и предложения: </p>
            <span>
              <img src={email} alt="email" />
              pchelkashop.ru@mail.ru
            </span>
          </div>
          <ul className={style.companyDetails}>
            <li>ИП Степанова Е.П.</li>
            <li>ИНН: 233610716405</li>
            <li>ОГРН: 319237500017172</li>
          </ul>
          <div className={style.address}>
            <p>Адрес производства: </p>
            <h3>
              РФ, 353585, Краснодарский край, Славянский район, х. Колесников, ул. Магистральная, 18
            </h3>
          </div>
        </div>
        <div className={style.socialMedias}>
          <img src={inst} alt="Instagram" />
          <img src={tg} alt="Telegram" />
          <img src={viber} alt="Viber" />
          <img src={whatsapp} alt="Whatsapp" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
