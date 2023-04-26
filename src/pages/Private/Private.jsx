import React, { version } from "react";
import style from "./Private.module.scss";
import Header from "../../Layout/Header/Header";
import vector from "../../assets/Vector.png";
import VectorUp from "../../assets/VectorUp.svg";
import fire from "../../assets/fire.svg";
import HelpIcon from "../../assets/HelpIcon1.png";
import CardPrivate from "./CardPrivate/CardPrivate";
const Private = () => {
  return (
    <div className="wrapper">
      <div className={style.Header}>
        <div className={style.container}>
          <div className={style.textHeader}>
            <h4>Главная</h4>
            <img src={vector} alt="" />
            <h4>Личный кабинет</h4>
          </div>
        </div>
      </div>
      <div className={style.Home}>
        <div className={style.components}>
          <div className={style.container}>
            <p className={style.line_1}></p>
            <h1 className={style.h1_1}>Личный кабинет</h1>
            {/* <div className={style.components}> */}
            <div className={style.txt}>
              <h3 className={style.h3}>Настройки</h3>
              <h3 className={style.h3_2}>Накопительная скидка</h3>
            </div>

            <div className={style.copmonentsContainer}>
              <div className={style.Left_part}>
                <div className={style.personalData}>
                  <div className={style.p_vect}>
                    <p>Личные данные</p>
                    <img src={VectorUp} alt="" className={style.p_vect_1} />
                  </div>
                  <div className={style.txt_2}>
                    <p>Фамилия*</p>
                    <input type="text" value="Иванова" className={style.inp} />
                    <p>Имя*</p>
                    <input type="text" value="Алена" className={style.inp_1} />
                    <p>Отчество*</p>
                    <input
                      type="text"
                      value="Николаевна"
                      className={style.inp_2}
                    />
                    <p>Номер телефона*</p>
                    <input type="text" value="+7 - " className={style.inp_3} />
                  </div>
                  <p className={style.p}>Редактировать</p>
                </div>
                {/* </div> */}
              </div>
              <div className={style.right_part}>
                <div className={style.accumulativeDiscount}>
                  {/* - */}
                  <div className={style.card}>
                    <div className={style.card_1}>
                      <img src={fire} alt="" />
                      <h3>Ваша скидка:</h3>
                      <button className={style.btn}>4%</button>
                    </div>

                    <div className={style.twoCard}>
                      <div className={style.card_2}>
                        <p>Вы потратили:</p>
                        <h3 className={style.h3_3}>4300₽</h3>
                      </div>

                      <div className={style.card_3}>
                        <p>До следующего уровня:</p>
                        <h3 className={style.h3_4}>700₽</h3>
                      </div>
                    </div>
                  </div>
                  {/* - */}
                  <div className={style.percent}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                      (item, i) => (
                        <p key={i} className={style.percent_1}>
                          {item}%
                        </p>
                      )
                    )}
                  </div>
                  {/* - */}
                  <p className={style.line_2}></p>
                  <div className={style.info}>
                    <img src={HelpIcon} alt="" className={style.HelpIcon} />
                    <p>
                      При регистрации на нашем сайте вы получаете возможность
                      участвовать в накопительной программе. За каждые
                      потраченные 2500 рублей вы получаете 1% скидки для
                      последующих заказов. Максимальный размер накопительной
                      скидки 15%. При оформлении новых заказов скидка
                      предоставляется автоматически.
                    </p>
                  </div>
                </div>
              </div>
              {/* --------- */}
            </div>
            <div className={style.center}>
              <div className={style.deliveryAddress}>
                <p>Адрес доставки</p>

                <div className={style.txt_3}>
                  <input className={style.inp_4} value="Россия" type="text" />
                  <p>Адрес доставки*</p>
                  <input
                    type="text"
                    className={style.inp_5}
                    value="Город, улица, дом, корпус, квартира"
                  />
                  <div className={style.txt_vect1}>
                    <p>Почтовый индекс*</p>
                    <img src={VectorUp} alt="" />
                  </div>
                  <input type="text" className={style.inp_6} value="900000" />
                </div>

                <p className={style.p_2}>Редактировать</p>
              </div>
              {/*  */}
              <div className={style.block}>
                <div className={style.HistoryOfOrders}>
                  <div className={style.txt_04}>
                    <h2 className={style.h2_}>История заказов</h2>
                    <br />
                    <p className={style.p_07}>20 января 2021</p>
                    <br />
                    <p className={style.p_line}></p>
                    <br />
                  </div>
                </div>
                <div className={style.Cards_privete}>
                  <CardPrivate />
                  <CardPrivate />
                  <CardPrivate />
                </div>
              </div>
            </div>
            {/*  */}

            <div className={style.Account}>
              <div className={style.accountVector}>
                <p>Аккаунт</p>
                <img src={VectorUp} alt="" />
              </div>

              <div>
                <p className={style.p_email}>Почта</p>
                <input type="email" value="exaple@mail.ru" className={style.inputAcc} />
              </div>

              <div>
                <p className={style.p_password}>Пароль</p>
                <input type="password" className={style.inputAcc_2} />
              </div>

              <p className={style.pAcc}>Редактировать</p>

              <div className={style.accChoose}>
                <p className={style.p_avatar}>Аватар</p>
                <div className={style.btnXp_1}>
                  <button className={style.btn_1}></button>
                  <p>Женский</p>
                </div>
                <div className={style.btnXp_2}>
                  <button className={style.btn_2}></button>
                  <p>Мужской</p>
                </div>
              </div>

              <div className={style.btnXp_3}>
                <button className={style.btn_3}></button>
                <p>Рассылки о скидках и акциях</p>
              </div>
            </div>

            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Private;
