import React, { useEffect, useRef, useState } from "react";
import style from "./Delivery.module.scss";
import img from "../../assets/strelka.svg";
import oneImg from "../../assets/1.svg";
import twoImg from "../../assets/2.svg";
import threeImg from "../../assets/3.svg";
import { Link } from "react-router-dom";
import { Link as Linkk } from "react-scroll";
import imgPayment1 from "../../assets/image 1.svg";
import imgPayment2 from "../../assets/image 2.svg";
import imgPayment3 from "../../assets/image 3.svg";

const Delivery = () => {
  let TOP_OFFSET = 70;

  const [move, setMove] = useState(false);

  useEffect(() => {
    const handleMove = () => {
      if (window >= TOP_OFFSET) {
        setMove(true);
      } else {
        setMove(false);
      }
    };

    window.addEventListener("scroll", handleMove);

    return () => {
      window.removeEventListener("scroll", handleMove);
    };
  }, []);

  const scrollRef = useRef();

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
        <div className={style.lines}>
          <div className={style.title}>
            <h1>Доставка и оплата</h1>
          </div>
          <div className={`${move ? "moveNavbar" : ""} ${style.menu}`}>
            <ul>
              <li className={style.menuParent}>Доставка</li>
              <Linkk to="return">
                <li className={style.menuParent}>Возврат</li>
              </Linkk>
              <Linkk to="payment">
                <li className={style.menuParent}>Оплата</li>
              </Linkk>
            </ul>
          </div>
          <div className={style.getProduct}>
            <h1>Способы получить товар</h1>
            <div className={style.options}>
              <div className={style.one}>
                <img src={oneImg} alt="" />
                <p>Заказать на сайте с доставкой Почтой России</p>
              </div>
              <div className={style.two}>
                <img src={twoImg} alt="" />
                <p>Заказать на сайте с доставкой Сдэк до двери или до склада</p>
              </div>
              <div className={style.three}>
                <img src={threeImg} alt="" />
                <p>Наша курьерская доставка по г. Славянск-на-Кубани </p>
              </div>
            </div>
          </div>
          <div className={style.commonBlock}>
            <div className={style.block1}>
              <h1>1. Заказать на сайте с доставкой Почтой России</h1>
              <p className={style.p}>
                Заказ товара осуществляется на нашем сайте *ссылка*, либо по
                телефону *телефон*. После оформления заказа с Вами свяжется наш
                оператор для подтверждения заказа и сверки данных. Примечание:
                при покупке по телефону заказ подтверждается устно с оператором.
              </p>
              <h3>Стоимость доставки</h3>
              <div className={style.box}>
                <div className={style.box1}>
                  <h4>Заказ до 4.000₽</h4>
                  <p className={style.linepod}></p>
                  <p className={style.price}>350*₽</p>
                </div>
                <div className={style.box2}>
                  <h4>Заказ до 4.000₽</h4>
                  <p className={style.linepod}></p>
                  <p className={style.price}>Бесплатно</p>
                </div>
              </div>
              <h2>
                *Дальневосточный федеральный округ доставка только Почтой России
                – 450₽.
              </h2>
            </div>

            <div className={style.block2}>
              <h1>
                2. Заказать на сайте с доставкой Сдэк до двери или до склада
              </h1>
              <p>
                Доставка осуществляется по России с 9:00 до 18:00 в рабочие дни
                и субботу.
              </p>
              <div className={style.table}>
                <div className={style.table1}>
                  <th className={style.th1}>Округ</th>
                  <th className={style.th2}>Стоимость</th>
                  <th className={style.th3}>Срок доставки</th>
                  <p className={style.adaptation}>Стоимость и срок доставки</p>
                </div>
                <div className={style.table2}>
                  <th className={style.th1}>
                    Центральный федеральный округ, Северо-западный федеральный
                    округ, Южный федеральный округ, Приволжский федеральный
                    округ
                  </th>
                  <th className={style.th2}>300₽</th>
                  <th className={style.th3}>2-6 дней</th>
                  <div className={style.adaptation2}>
                    <p>300₽</p>
                    <h4>2-6 дней</h4>
                  </div>
                </div>
                <div className={style.table3}>
                  <th className={style.th1}>
                    Уральский федеральный округ, Сибирский федеральный округ
                  </th>
                  <th className={style.th2}>700₽</th>
                  <th className={style.th3}>3-8 дней, 6-14 дней</th>
                  <div className={style.adaptation3}>
                    <p>700₽</p>
                    <h4>3-8 дней, 6-14 дней</h4>
                  </div>
                </div>
                <div className={style.table4}>
                  <th className={style.th1}>
                    г. Екатеринбург, Красноярск, Томск, Новосибирск
                  </th>
                  <th className={style.th2}>450₽</th>
                  <th className={style.th3}>10-18 дней</th>
                  <div className={style.adaptation4}>
                    <p>450₽</p>
                    <h4>10-18 дней</h4>
                  </div>
                </div>
                <div className={style.table5}>
                  <th className={style.th1}>
                    Доставка службой Сдэк <b>до двери</b>
                  </th>
                  <th className={style.th1}>
                    +150₽ к базовому тарифу до пункта выдачи заказов
                  </th>
                </div>
              </div>
              <p>
                Если вы заказываете к определенной дате, не вписывающиеся в
                данные сроки, уточните у менеджера, возможно, доставку получится
                ускорить 🙂{" "}
              </p>
            </div>
            <div className={style.block3}>
              <h1>3. Наша курьерская доставка по г. Славянск-на-Кубани </h1>
              <p>
                Рабочие дни и суббота с 9:00 до 19:00 ч. Время прибытия курьера
                согласовывается с менеджером.
                <b>Стоимость: бесплатная для заказов от 500₽. </b>
              </p>
              <h4>
                <b>
                  {" "}
                  Доставка в другие страны обсуждается индивидуально с
                  менеджером.
                </b>
              </h4>
            </div>
          </div>
          <div id="return" ref={scrollRef} className={style.return}>
            <h1>Возврат</h1>
            <p className={style.p1}>
              Товары, реализуемые в нашем интернет-магазине, соответствуют всем
              требованиям и имеют все необходимые
              <h4> документы и сертификаты .</h4>
            </p>
            <p className={style.borderReturn}>
              Обращаем внимание, что в момент доставки, вам необходимо
              внимательно осмотреть товар в присутствии курьера или сотрудника
              Пункта выдачи, убедиться в отсутствии механических повреждений и в
              соответствии заказываемой продукции! Из-за различий в настройках
              цветопередачи устройств оттенки могут отличаться от представленных
              на сайте.
            </p>
            <div className={style.commonP}>
              <p className={style.p1}>
                Помните, расписываясь в документах при получении заказа, вы
                подтверждаете, что забираете верный товар в целости и
                сохранности, и не имеете претензий к курьерской службе/пункту
                выдачи и магазину.
              </p>
              <p className={style.p2}>
                Вы имеете право отказаться от покупки без объяснения причин как
                после оформления заказа, так и во время доставки. Сообщите нам
                об отказе по телефону **** или электронной почте –
                pchelkashop.ru@mail.ru
              </p>
              <p className={style.p3}>
                Обмен товара надлежащего качества проводится, если указанный
                товар не был в употреблении, сохранены его товарный вид,
                потребительские свойства, пломбы, фабричные ярлыки, не нарушена
                целостность упаковки, а также имеется товарный чек или кассовый
                чек либо иной подтверждающий оплату указанного товара документ.
                В случае возврата товара уплаченная сумма возвращается за
                вычетом стоимости доставки после обратного получения нами товара
                и проведения экспертизы, в случае возврата товара с браком.
              </p>
            </div>
          </div>
          <div id="payment" className={style.payment}>
            <h1>Оплата заказа</h1>
            <div className={style.payment1}>
              <h2>1. Картой на сайте</h2>
              <p>
                В нашем интернет-магазине Вы можете приобретать товар по
                банковской карте, оплатив заказ через сайт.
              </p>
            </div>
            <div className={style.payment2}>
              <h2>2. Наличная/безналичная оплата курьеру</h2>
              <p>
                Оплата наличными/безналичным способом осуществляется при выдаче
                заказа курьером или в службе доставки.{" "}
              </p>
            </div>
            <h3>Банковские карты, принимаемые в нашем инетренет-магазине</h3>
            <div className={style.paymentImg}>
              <img src={imgPayment1} alt="" />
              <img src={imgPayment2} alt="" />
              <img src={imgPayment3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
