import React from 'react'
import Header_1 from "../../assets/Header.svg"
import headerLupa from "../../assets/headerLupa.svg"
import headerKarzina from "../../assets/headerKarzina.svg"
import headerProfil from "../../assets/headerProfil.svg"
import Burger from '../../components/BurgerMenu/Burger'



const Header = () => {
  return (
    <>
      <div className='container_header'>
        <div className="header">
          <img src={Header_1} alt="" />
          <p>8-(000)-000-00-00 МСК (9-21)</p>
          <div className="input">
            <input className='input_header' type="text" placeholder='Поиск по сайту...' />
            <img className='headerLupa' src={headerLupa} alt="" />
          </div>
          <div className="headerGap">
            <p className="karzina">
              <img className='headerKarzina' src={headerKarzina} alt="" />
            </p>
            <div className="profil">
              <img src={headerProfil} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Burger/>
    </>
  )
}

export default Header