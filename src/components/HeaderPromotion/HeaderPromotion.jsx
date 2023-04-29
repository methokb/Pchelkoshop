<<<<<<< HEAD:src/components/Header/Header.jsx
=======
import React from "react";
import style from "./HeaderPromotion.module.scss";
import img1 from "../../assets/strelka.svg";
import { Link } from "react-router-dom";
const HeaderPromotion = () => {
  return (
    <div className={style.Header}>
      <div className={style.headerText}>
        <p><Link to='/'>Главная</Link></p>
        <img src={img1} alt="" />
        <p>Акции</p>
      </div>
    </div>
  );
};


export default HeaderPromotion;
>>>>>>> 894b465085409a29ab10624dcb121c72e634d61d:src/components/HeaderPromotion/HeaderPromotion.jsx
