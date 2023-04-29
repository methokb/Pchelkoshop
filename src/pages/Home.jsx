import React from "react";
import style from "./Home.module.scss";
import Seti from "../components/SotialSeti/Seti";
import Stock from "../components/Stock/Stock";
import GamesCaralog from "../components/GamesCatalog/GamesCatalog";
import Video from "../components/Video/Video";
import Quest from "../components/quests/Quest";
import Acordion from "../components/Acordion/Acordion";
import Reviews from "../components/Reviews/Reviews";

const Home = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.Header}>
          <div className={style.HeaderContent}>
            <h1>
              Квест в коробке – объединяет
              <br />
              семью и друзей в поисках разгадки <br />
              <p className={style.pHome}>
                Подготовка до 10 минут, прохождение 60-90 минут, яркие эмоции -
                надолго!
              </p>
            </h1>
            <button className={style.btnHome}>выбрать игру</button>
          </div>
        </div>
      </div>

      <Seti />
      <Stock />
      <GamesCaralog />
      <Video />
      <Quest />
      <Acordion />
      <Reviews />
    </>
  );
};

export default Home;
