import React from "react";
import style from "./Burger.module.scss";
import { Link } from "react-router-dom";

const Burger = () => {
  return (
    <div className={style.BurgerMenu}>
      <div className={style.listContainer}>
        <div className={style.textBurger}>
          <ul className={style.ulBurger}>
            <li>
              <Link className={style.LinkBurger} to="/catalog">
                Каталог
              </Link>
            </li>
            <li>
              <Link className={style.LinkBurger} to="/promotion">
                Акции
              </Link>
            </li>
            <li>
              <Link className={style.LinkBurger} to="/decor">
                офор
              </Link>
            </li>
            <li className={style.comment}><Link to="/comment">Отзывы</Link></li>
            <li>
              <Link className={style.LinkBurger} to="/delivery">
                Доставка и оплата
              </Link>
            </li>
            <div>
              <li className={style.liBurger}>
                О комапании
                <div className={style.hoveredList}>
                  <a href=""><Link>О нас</Link></a>
                  <a href="">Контакты</a>
                  <a href="">Документы</a>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className={style.mobileBtn}></div>
    </div>
  );
};

export default Burger;
