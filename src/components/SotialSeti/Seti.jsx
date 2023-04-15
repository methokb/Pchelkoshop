import React from 'react'
import style from "./Seti.module.scss"
import instagram from "../../assets/instagram.svg"
import whats from "../../assets/whats.svg"
import phone from "../../assets/phone.svg"
import telegram from "../../assets/telegram.svg"

const Seti = () => {
    return (
        <div className={style.ContainerSeti}>
            <div className={style.setiContainer}>
                <img src={instagram} alt="" />
                <img src={whats} alt="" />
                <img src={phone} alt="" />
                <img src={telegram} alt="" />

            </div>
        </div>

    )
}

export default Seti