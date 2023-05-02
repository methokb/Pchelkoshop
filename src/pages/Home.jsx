//IMPORT IMPORTANT STYLES AND LIBS
import React from 'react'
import style from "./Home.module.scss"

//IMPORT COMPONENTS FROM HOMEPAGE
import Seti from '../components/SotialSeti/Seti'
import Stock from '../components/Stock/Stock'
import GamesCaralog from '../components/GamesCatalog/GamesCatalog'
import Video from '../components/Video/Video'
import Quest from '../components/quests/Quest'
import Acordion from '../components/Acordion/Acordion'
import Reviews from '../components/Reviews/Reviews'

//IMPORT REGISTER FUNCTIONS
import { useDispatch } from 'react-redux';
import { useAuth } from './../hooks/useAuth';
import { removeUser } from '../store/slices/userSlice';
import { Navigate } from 'react-router-dom';

const Home = () => {

  const dispatch = useDispatch();

  const {isAuth , email} = useAuth();

  return isAuth ?   (
    <div>
      <div className={style.container}>
        <div className={style.Header}>
          <div className={style.HeaderContent}>
            <h1>
              Квест в коробке – объединяет
              <br />
              семью и друзей в поисках разгадки <br/>
               <p className={style.pHome}>Подготовка до 10 минут, прохождение 60-90 минут, яркие эмоции - надолго!</p>
            </h1>
               <button className={style.btnHome}>выбрать игру</button>
          </div>
       
        </div>
    
      </div>
      
      <Seti/>
      <Stock/>
      <GamesCaralog/>
      <Video/>
      <Quest/>
      <Acordion/>
      <Reviews/>
    </div>
  ) : (
    <Navigate to="/Login"/>
  )
  
}

export default Home