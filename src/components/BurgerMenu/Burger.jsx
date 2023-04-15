import React from 'react'
import style from "./Burger.module.scss"
  
const Burger = () => {
  return (
    <div className={style.BurgerMenu}>
      <div className={style.listContainer}>
        <div className={style.textBurger}>

          <ul className={style.ulBurger}>
            <li>Каталог</li>
            <li>Акции</li>
            <li>Отзывы</li>
            <li>Доставка и оплата</li>
            <div>
              <li className={style.liBurger}>О комапании
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
      <div className={style.mobileBtn}>
      </div>
    </div>
  )
}

export default Burger