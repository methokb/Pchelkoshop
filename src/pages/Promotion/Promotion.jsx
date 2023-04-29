import React from "react";
<<<<<<< HEAD
import style from "./Promotion.module.scss";
import Center from "../../components/Center copy/Center";

export const Promotion = () => {
    return (
        <>
            <p className={style.line}></p>
            <div className={style.container}>
                <Center />
            </div>
            <p className={style.line2}></p>
        </>
    );
};
=======
import HeaderPromotion from "../../components/HeaderPromotion/HeaderPromotion";
import style from "./Promotion.module.scss";
import Center from "../../components/Center/Center";
const Promotion = ({ setValue, data, setData }) => {
  return (
    <>
      <HeaderPromotion />
      <p className={style.line}></p>
      <div className={style.container}></div>
      <Center setValue={setValue} data={data} setData={setData} />
      <p className={style.line2}></p>
    </>
  );
};

export default Promotion;
>>>>>>> 894b465085409a29ab10624dcb121c72e634d61d
