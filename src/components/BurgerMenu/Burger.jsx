import React from 'react'
import style from "./Burger.module.scss"
import { Link } from 'react-router-dom'
  
const Burger = () => {
  return (
    <div className={style.BurgerMenu}>
      <div className={style.listContainer}>
        <div className={style.textBurger}>
          <ul className={style.ulBurger}>
<<<<<<< HEAD
            <li><Link to='/decor'>офор</Link></li>
            <li><Link to="/catalog">Каталог</Link></li>
            <li><Link to="/promotion">Акции</Link></li>
=======
            <li>Каталог</li>
            <Link to='/promotion'><li>Акции</li></Link>
>>>>>>> 894b465085409a29ab10624dcb121c72e634d61d
            <li>Отзывы</li>
            <li><Link to="/delivery">Доставка и оплата</Link></li>
            <div>
              <li className={style.liBurger}>
                О комапании
                <div className={style.hoveredList}>
                  <a href="">О нас</a>
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
