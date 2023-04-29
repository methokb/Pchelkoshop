import React from 'react'
import style from './Center.module.scss'
import poisk from '../../assets/poisk.svg'
import action from '../../assets/Group 231.svg'
import Card from '../Card/Card'
const Center = () => {
  return (
    <div className={style.Center}>
        <div className={style.navbar}>
            <div className={style.up_part}>
            <h2>Фильтр</h2>
            <input type="text" placeholder='Поиск по акциям и новостям...'  className={style.input}/>
            <img  src={poisk} alt="" className={style.imgPoisk}/>
                <button className={style.filter}>Сначала: новые</button>
                <section>
                    <option value="new">новые</option>
                    <option value="new">new</option>
                    <option value="new">new</option>
                    <option value="new">new</option>
                </section>
            </div>                          
            <div className={style.bottom_part}>
                <div className={style.left}>
                <h2>Категория</h2>
                <p></p>
                <input type="checkbox"/><label>Акции и спец. предложения</label>
                <br />
                <input type="checkbox"/><label>Новости</label>
                </div>
                <div className={style.right}>
                    <h2>Январь-февраль 2021</h2>
                </div>
            </div>
            <div className={style.Cards}>
            <Card img={action} text={'Скидка -15% на групповой заказ'} number={'1.01.21'}/>
            <Card img={action} text={'Скидка -15% на групповой заказ'} number={'1.01.21'}/>
            <Card img={action} text={'Скидка -15% на групповой заказ'} number={'1.01.21'}/>
            <Card img={action} text={'Скидка -15% на групповой заказ'} number={'1.01.21'}/>
            </div>
        </div>
    </div>
  )
}

export default Center

{/* <div className={style.navbar}>
<div className={style.left_part}>

    <h3>Категория</h3>
    <p className={style.left_part_line}></p>
    <input type="checkbox" /><label>Акции и спец. предложения</label> <br />
    <input type="checkbox" /><label>Новости</label>
</div>
 <div className={style.right_part}>
    <div className={style.right_part_up}>

    
    </div>
</div>
</div> */}