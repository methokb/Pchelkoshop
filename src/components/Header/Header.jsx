import React from "react";
import style from "./Header.module.scss";
import img1 from "../../assets/strelka.svg";
import { Link } from "react-router-dom";
const Header = () => {
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

export default Header;
