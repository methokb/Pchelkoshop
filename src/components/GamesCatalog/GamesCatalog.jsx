import React, { useEffect, useState } from 'react'
import style from "./GamesCatalog.module.scss"
import axios from 'axios'
import image from "../../assets/playCard.svg"
import time from "../../assets/dbTime.svg"
import smail from "../../assets/dbBrain.svg"
import his from "../../assets/dbPlay.svg"
import basket from "../../assets/dbBasket.svg"
import strong from "../../assets/dbStrong.svg"
import { GiBackwardTime } from 'react-icons/gi'
import { TbBrain } from "react-icons/tb"
import { TbHourglass } from "react-icons/tb"
import { TbBallBasketball } from "react-icons/tb"
import { FaRegGrin } from "react-icons/fa"
import { async } from 'q'
import { cards } from './gamesData'

const url = "http://localhost:3333/cards"
const GamesCatalog = () => {
  console.log(cards);

  const [user, setUser] = useState([])
  console.log(user);

  useEffect(() => {
    axios.get(url)
      .then((res) => setUser(res.data))
  }, [])


  return (
    <div className={style.line}>
      <p className={style.GamesP}></p>
      <div className={style.container}>
        <div className={style.GamesP_catalog}>
          <div className={style.GameP_text}>
            <h1>Каталог игр</h1>
            <h4 className={style.GamesP_h4}>Смотреть все игры</h4>
            <p className={style.with_hei}>Популярные игры</p>
          </div>
          <div className={style.dbJson}>
            <div className={style.products}>
              {
                cards.map((item => {
                  return (
                    <>
                      <div className={style.catalogContainer}>
                        <div className={style.containerGames}>
                          <div className={style.product}>
                            <img src={item?.img} alt="" />
                            <h3>Настольная игра “Сказочное <br />
                              королевство” с дополненной...</h3>
                            <div className={style.icon}>
                              <ul className={style.iconUl}>
                                <li className={style.listItem}> <TbHourglass size={26} color='#5B636B' />{item?.timeOfGame?.textTitle}</li>
                                <li className={style.listItem}>  <FaRegGrin size={24} color='#5B636B' />{item?.playCount?.textTitle}</li>
                                <li className={style.listItem}> <GiBackwardTime size={29} color='#5B636B' />{item?.preperatin?.textTitle}</li>
                                <li className={style.listItem}>  <TbBallBasketball size={26} color='#5B636B' />{item?.basket?.textTitle}</li>
                                <li className={style.listItem}>  <TbBrain size={26} color='#5B636B' />{item?.hard?.textTitle}</li>
                              </ul>
                              <h2 className={style.h2Games}>3600₽ </h2>
                              <button className={style.btnGames}>ДОБАВИТЬ В КОРЗИНУ</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                }))
              }
            </div>
          </div>
        </div>
        <div className={style.lineFooter}>
          <p className={style.lineFooter_end}></p>
        </div>
      </div>
    </div>
  )
}

export default GamesCatalog