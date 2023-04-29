import HeaderPromotion from "../../components/HeaderPromotion/HeaderPromotion";
import React from "react";
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