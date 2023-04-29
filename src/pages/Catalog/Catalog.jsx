import React from 'react'
import style from "./Catalog.module.scss"
export const Catalog = () => {
  return (
    <>
      <div className={style.catalogNavabar}>
        <div className={style.catalogNavabarText}>
          <p>Главная</p>
          <p></p>
          <p>Каталог</p>
        </div>
      </div>
      <div className={style.catalog}>
      </div>
    </>
  )
}