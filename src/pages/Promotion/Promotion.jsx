import React from "react";
import HeaderPromotion from "../../components/HeaderPromotion/HeaderPromotion";
import style from "./Promotion.module.scss";
import Center from "../../components/Center/Center";
const Promotion = ({ setValue, data, setData }) => {
  return (
    <>
      <HeaderPromotion />
      <p className={style.line}></p>
      <div className={style.container}>
      <Center setValue={setValue} data={data} setData={setData} />
      </div>
      <p className={style.line2}></p>
    </>
  );
};

export default Promotion;
