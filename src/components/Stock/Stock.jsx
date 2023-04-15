import React from 'react'
import style from "./Stock.module.scss"
import stock from "../../assets/promition.svg"

const Stock = () => {
    return (

        <div className={style.containerStock}>
            <div className={style.textStock}>
                <p className={style.textPstock}>Новейшие акции</p>
                <p className={style.textPStock}>Смотреть все акции</p>
            </div>
            <div className={style.container}>
            <div className={style.slide}>
                <div className={style.kartoStock}>
                    <div className={style.karto}>
                        <div className={style.prom}>
                            <div className={style.promitionImg}>
                                <img src={stock} alt="" />
                            </div>
                            <div className={style.textContent}>
                                <h3>Скидка -15% на груп...</h3>
                                <p>Получите скидку -15% при <br />
                                    оформлении группового заказа в период с <br /> 1 января 2021 г. по 19...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.kartoStock}>
                    <div className={style.karto}>
                        <div className={style.prom}>
                            <div className={style.promitionImg}>
                                <img src={stock} alt="" />
                            </div>
                            <div className={style.textContent}>
                                <h3>Скидка -15% на груп...</h3>
                                <p>Получите скидку -15% при <br />
                                    оформлении группового заказа в период с <br /> 1 января 2021 г. по 19...</p>
                            </div>
                        </div>
                    </div>
                </div> 
                 <div className={style.kartoStock}>
                    <div className={style.karto}>
                        <div className={style.prom}>
                            <div className={style.promitionImg}>
                                <img src={stock} alt="" />
                            </div>
                            <div className={style.textContent}>
                                <h3>Скидка -15% на груп...</h3>
                                <p>Получите скидку -15% при <br />
                                    оформлении группового заказа в период с <br /> 1 января 2021 г. по 19...</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </div>
        </div>

    )
}

export default Stock