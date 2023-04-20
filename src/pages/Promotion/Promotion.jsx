import React from "react";
import Header from "../../components/Header/Header";
import style from "./Promotion.module.scss";
import Center from "../../components/Center/Center";
const Promotion = () => {
  return (
    <>
      <Header />
      <p className={style.line}></p>
      <div className={style.container}>
        <div className={style.TextPromotion}>
          <h1>Акции и новости</h1>
        </div>
      </div>
      <Center />
      <p className={style.line2}></p>
    </>
  );
};

export default Promotion;
