import React, { useState } from "react";
import style from "./Center.module.scss";
import poisk from "../../assets/poisk.svg";
import action from "../../assets/Group 231.svg";
import Card from "../Card/Card";
import debounce from "lodash.debounce";
const Center = ({ setValue, data, setData }) => {

  const [checked, setChecked] = useState(false);
  const [offset, setOffset] = useState(4);
  const [limit, setLimit] = useState(0);


  console.log('number', offset, limit)

  const [str, setStr] = useState("");
  

  const filteredData = (e) => {
    e.preventDefault();
    setData(
      data &&
        data.filter((item) =>
          item.tag.toLowerCase().includes(str.toLowerCase())
        )
    );
    setStr('')
  };

  const onChange = (e) => {
    e.preventDefault();
    setStr(e.target.value);
  };

  return (
    <div className={style.Center}>
      <div className={style.navbar}>
        <div className={style.TextPromotion}>
          <h1>Акции и новости</h1>
        </div>
        <div className={style.up}>
        <div className={style.up_part}>
        <h2>Фильтр</h2>
                <form onSubmit={(e) => filteredData(e)}>
                  <input
                    // onChange={(e) => {
                    //   e.preventDefault()
                    //   setStr(e.target.value)
                    // }}
                    onChange={(e) => onChange(e)}
                    type="text"
                    value={str}
                    placeholder="Поиск по акциям и новостям..."
                    className={style.inputSearch}
                  />
                </form>
                <img src={poisk} alt="" className={style.imgPoisk} />

                <button className={style.filter}>Сначала: новые</button>
              </div>
          <div className={style.bottom_part}>
            <div className={style.left}>

              <h2>Фильтр</h2>
              <h3>Категория</h3>
              <p></p>
              <input onClick={() => {
                setChecked(checked)
                setOffset(offset === 8 ? offset - 4 : offset)
                setLimit(limit === 4 ? limit - 4 : limit)
              }} type="checkbox" />
              <label>Акции и спец. предложения</label>
              <br />
              <input onClick={() => {
                setChecked(!checked)
                setOffset(offset >= 4 ? offset + offset : offset)
                setLimit(limit === 0 ? limit + offset : limit)
              }} type="checkbox" />
              <label>Новости</label>
            </div>
          </div>
          <div className={style.right}>
                <h2>Январь-февраль 2021</h2>
              </div>
        </div>
        <div className={style.Cards}>
          {data && data?.slice(limit, offset).map((item, i) => <Card {...item} />)}
        </div>
      </div>
    </div>
  );
};

export default Center;


