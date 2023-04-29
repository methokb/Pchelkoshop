import React from 'react'
import strelka from '../../assets/Vector 26.svg'
import personImg from '../../assets/Group (2).svg'
import fiveImg from '../../assets/5.svg'
import kvadrat from '../../assets/Rectangle 91.svg'
import { Link } from 'react-router-dom'
import style from "../Comment/Comment.module.scss"
const Comment = () => {
    return (
        <div className={style.Otzyvy}>
            <div className={style.Otzyvy_route}>
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <img src={strelka} alt="" />
                    <li>Отзывы</li>
                </ul>
            </div>
            <div className={style.line_up}></div>
            <div className={style.Otzyvy_center}>
                <h1>Отзывы</h1>
                <h2>Чтобы ваш отзыв появился в списке, оставьте его к конкретному товару</h2>
            </div>
            <div className={style.Otzyvy_person}>
                <div className={style.background}>
                <div className={style.container}>
                    <div className={style.person}>
                        <div className={style.up}>
                            <div className={style.up_part}>
                                <img src={personImg} alt="" />
                                <div className={style.title}>
                                    <h1>Ирина Ермолаева</h1>
                                    <h2>10.09.20</h2>
                                    <img src={fiveImg} alt="" />
                                </div>
                            </div>
                            <div className={style.kvadrat}>
                                <img src={kvadrat} alt="" />
                                <img src={kvadrat} alt="" />
                                <img src={kvadrat} alt="" />
                            </div>
                        </div>
                        <div className={style.bottom}>
                            <h1>Советую всем мамочкам и папочкам! Первый квест, который мы выбрали - Загадки Египетских пирамид. Играли, размышляли всей семьей! Это было действителньо очень занимательно!</h1>
                        </div>
                        <div className={style.kvadrat2}>
                                <img src={kvadrat} alt="" />
                                <img src={kvadrat} alt="" />
                                <img src={kvadrat} alt="" />
                            </div>
                    </div>
                </div>
                </div>
                <div className={style.background}>
                <div className={style.container}>
                    <div className={style.person}>
                        <div className={style.up}>
                            <div className={style.up_part}>
                                <img src={personImg} alt="" />
                                <div className={style.title}>
                                    <h1>Ирина Ермолаева</h1>
                                    <h2>10.09.20</h2>
                                    <img src={fiveImg} alt="" />
                                </div>
                            </div>
                            <div className={style.kvadrat}>
                                <img src={kvadrat} alt="" />
                                <img src={kvadrat} alt="" />
                                <img src={kvadrat} alt="" />
                            </div>
                        </div>
                        <div className={style.bottom}>
                            <h1>Советую всем мамочкам и папочкам! Первый квест, который мы выбрали - Загадки Египетских пирамид. Играли, размышляли всей семьей! Это было действителньо очень занимательно!</h1>
                        </div>
                        <div className={style.kvadrat2}>
                                <img src={kvadrat} alt="" />
                                <img src={kvadrat} alt="" />
                                <img src={kvadrat} alt="" />
                            </div>
                    </div>
                </div>
                </div>
            </div>
            <div className={style.text_bottom}>
                <h1>загрузить еще</h1>
            </div>
        </div>
    )
}

export default Comment