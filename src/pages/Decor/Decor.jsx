import React from 'react'
import style from "./Decor.module.scss"
const Decor = () => {
    return (
        <div className={style.decor}>
            <div className={style.decorContainer}>
                <p className={style.decorContainerHeader}>Если у вас возникли сложности с оформлением заказа — будем рады принять его по телефону 8 (000) 000-00-00</p>
                <h2 className={style.decorContainerDecor}>Детали доставки и оплаты</h2>
                <div className={style.decorCenter}>
                    <div className={style.decorCenterSurname}>
                        <div className={style.decorCenterSurnameComponents}>
                            <div className={style.decorComponents}>
                                <div className={style.decorCenterAll}>
                                    <div className={style.decorSurname}>
                                        <p className={style.decorSurnameSis}>Фамилия<span className={style.decorSurnameP}>*</span></p>
                                        <input className={style.decorSurnameInput} placeholder='Иванова' type="text" />
                                    </div>
                                    <div className={style.decorSurname}>
                                        <p className={style.decorSurnameSis}>Отчество<span className={style.decorSurnameP}>*</span></p>
                                        <input className={style.decorSurnameInput} placeholder='Николаевна' type="text" />
                                    </div>
                                    <br />
                                    <br />
                                    <div className={style.decorSurname}>
                                        <p className={style.decorSurnameSis}>Адрес доставки*<span className={style.decorSurnameP}>*</span></p>
                                        <input className={style.decorSurnameInput} placeholder='Город, улица, дом, корпус, квартира' type="text" />
                                    </div>
                                    <div className={style.decorSurname}>
                                        <p className={style.decorSurnameSis}>Почтовый индекс*<span className={style.decorSurnameP}>*</span></p>
                                        <input className={style.decorSurnameInputT} placeholder='900000' type="text" />
                                    </div>
                                    <br />
                                    <br />
                                    <div className={style.decorSurname}>
                                        <p className={style.decorSurnameSis}>Номер телефона*<span className={style.decorSurnameP}>*</span></p>
                                        <input className={style.decorSurnameInputTi} placeholder='+7 - ' type="text" />
                                    </div>
                                    <div className={style.decorSurname}>
                                        <p className={style.decorSurnameSis}>E-mail*<span className={style.decorSurnameP}>*</span></p>
                                        <input className={style.decorSurnameInput} placeholder='Адрес эл. почты для чека' type="text" />
                                    </div>
                                </div>
                                <div className={style.decorName}>
                                    <p className={style.decorSurnameSis}>Имя<span className={style.decorSurnameP}>*</span></p>
                                    <input className={style.decorNameInput} type="text " placeholder='Алена' />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                <p className={style.decorNameBlock}>Россия</p>
                                </div>
                            </div>
                            .decorPlay
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Decor