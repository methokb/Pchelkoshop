import React, { useRef, useState } from 'react';
import style from './Cooperation.module.scss';
import tg from '../../assets/tg.svg';
import viber from '../../assets/viber.svg';
import whatsapp from '../../assets/whatsapp.svg';
import { RiArrowUpSLine } from 'react-icons/ri';

const Cooperation = () => {
  const arr = [
    {
      value: 'Розничный магазин',
    },
    {
      value: 'Розничная сеть',
    },
    {
      value: 'Интернет-магазин',
    },
    {
      value: 'СП',
    },
    {
      value: 'Другое',
    },
  ];
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');

  const filteredArr = arr.filter((el) => el.value.toLowerCase().includes(value.toLowerCase()));

  const onChange = (e) => {
    e.preventDefault();
    setShow(!show);
    setValue(e.target.value);
  };

  const onSelect = (item) => {
    setValue(item.value);
    setShow(!show);
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.cooperation}>
          <h2 className={style.title}>Сотрудничество</h2>
          <p className={style.description}>
            Информация о сотрудничестве для оптовых покупателей и блогеров
          </p>
          <div className={style.firstRule}>
            <h3>
              <span>1</span>Хотите выгодно приобрести игры для организации или мероприятия? Просто
              оставьте заявку.{' '}
            </h3>
            <p className={style.helperText}>
              Наш оператор свяжется с Вами в ближайшее время и поможет:
            </p>
            <ul className={style.list}>
              <li>Выбрать игры, определиться с количеством и узнать специальную цену.</li>
              <li>
                Узнать о каждой игре и подобрать то, что нужно именно вашему коллективу или
                ученикам.
              </li>
              <li>
                Получить самые выгодные скидки, которые действуют у нас. Например, 15% для
                группового заказа от школы или организации
              </li>
              <li>
                Оформить наиболее удобный способ доставки - курьером, транспортной компанией, почтой
                или самовывозом
                <br />
                Вы можете просто позвонить нам по телефону +7 ()
              </li>
            </ul>
            <div className={style.contact}>
              <p>Или связаться с нами через мессенджеры</p>
              <div className={style.socials}>
                <img src={whatsapp} alt="" />
                <img src={viber} alt="" />
                <img src={tg} alt="" />
              </div>
            </div>
          </div>
          <div className={style.secondRule}>
            <h3>
              <span>2</span>
              <div>
                Вам нравится наш продукт?
                <br />
                Расскажите о нём и получите его бесплатно!
                <h4>Сотрудничество для блогеров</h4>
              </div>
            </h3>
            <p className={style.secondHelperText}>
              Это возможно в рамках сотрудничества по одобренной заявке. Этапы сотрудничества:
            </p>
            <ul className={style.secondList}>
              <li>
                1. Вы выбираете продукт/ы, о котором/ых хотите написать/снять видео-обзор или
                статью.
              </li>
              <li>
                2. Направляете заявку с указанием желаемого продукта, ссылкой на вашу площадку и
                показателям <br /> статистики просмотров/вовлечённости, половозрастному
                распределению аудиторию.
              </li>
              <li>
                3. Для крупных блогеров будут рассмотрены индивидуальные условия сотрудничества.
              </li>
            </ul>
            <div className={style.secondContact}>
              <p>
                Заявки отправляйте на почту{' '}
                <span style={{ color: '#DB4E66' }}>pchelkashop.ru@mail.ru</span> с темой письма
                <span style={{ color: '#DB4E66' }}>«Блогер»</span> или в мессенджер:
              </p>
              <div className={style.secondSocials}>
                <img src={whatsapp} alt="" />
                <img src={viber} alt="" />
                <img src={tg} alt="" />
              </div>
            </div>
          </div>
          <div className={style.thirdRule}>
            <h3>
              <span>3</span>
              <div>
                Хотите стать партнером?
                <h4>для магазинов, сетей, настольных клубов, СП</h4>
              </div>
            </h3>
            <p className={style.thirdHelperText}>Преимущества сотрудничества с нами:</p>
            <ul className={style.thirdList}>
              <li>
                Приобретение товаров напрямую у производителя. Мы несем ответственность за своё
                производство и тщательно следим за качеством своей
                <br /> продукции.
              </li>
              <li>
                Отстройка от конкурентов. Используются оригинальные авторские механики игр и
                небанальный игровой реквизит.
              </li>
              <li>
                Высокая маржинальность продукции и свободная розничная цена для оптовых партнеров.
              </li>
              <li>Гибкая система скидок для постоянных партнеров.</li>
              <li>Доступная минимальная сумма для оптового заказа - 12000 рублей.</li>
              <li>Предоставление всех сертификатов и нормативных документов.</li>
              <li>
                Предоставление фото и видео материалов продукции, в том числе с рекламных контент
                съемок с моделями.
              </li>
              <li>
                Бесплатная доставка до транспортной компании и помощь в логистике: подбор и контроль
                выполнения работ транспортной компанией,
                <br /> соблюдение сроков доставки.
              </li>
              <li>Повышенные скидки на предзаказ и ограниченный тираж</li>
            </ul>
            <div className={style.rec}>
              Начните продавать трендовые игры уже завтра, пока до нас не добрались Ваши конкуренты!
            </div>
          </div>
        </div>
      </div>
      <div className={style.coopReq}>
        <div className={style.formContainer}>
          <h3 className={style.coopTitle}>
            Оставьте заявку для сотрудничества и запросите прайс-лист
          </h3>
          <p className={style.coopDescription}>Наш оператор свяжется с Вами в ближайшее время</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className={style.form}>
              <div className={style.left}>
                <div>
                  <label htmlFor="">
                    Фамилия<span>*</span>
                  </label>
                  <input type="text" placeholder="Иванова" />
                </div>
                <div>
                  <label htmlFor="">
                    Имя<span>*</span>
                  </label>
                  <input type="text" placeholder="Алена" />
                </div>
                <div>
                  <label htmlFor="">
                    Отчество<span>*</span>
                  </label>
                  <input type="text" placeholder="Николаевна" />
                </div>
                <div>
                  <label htmlFor="">
                    Наименование юр.лица<span>*</span>
                  </label>
                  <input type="text" placeholder=" " />
                </div>
              </div>
              <div className={style.right}>
                <div>
                  <label htmlFor="">
                    Номер телефона<span>*</span>
                  </label>
                  <input type="text" placeholder="+7 - " />
                </div>
                <div>
                  <label htmlFor="">
                    E-mail<span>*</span>
                  </label>
                  <input type="text" placeholder=" " />
                </div>
                <div>
                  <label htmlFor="">
                    Способ реализации продукции<span>*</span>
                  </label>
                  <div className={style.input}>
                    <input
                      value={value}
                      onChange={onChange}
                      type="text"
                      placeholder="Выберите..."
                    />
                    <RiArrowUpSLine
                      onClick={() => setShow(!show)}
                      size="25"
                      className={style.inputArrow}
                    />
                  </div>
                  {show ||
                    (filteredArr.length >= 1 && (
                      <div className={style.drop}>
                        <ul>
                          {filteredArr.map((item, i) => (
                            <li key={i} onClick={() => onSelect(item)}>
                              {item.value}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className={style.button}>
              <button>Оставить заявку</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Cooperation;
