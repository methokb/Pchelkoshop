import React, { useEffect, useState } from 'react'
import Header_1 from "../../assets/Header.svg"
import headerLupa from "../../assets/headerLupa.svg"
import headerKarzina from "../../assets/headerKarzina.svg"
import headerProfil from "../../assets/headerProfil.svg"
import Burger from '../../components/BurgerMenu/Burger'
import { Link } from 'react-router-dom'


const filterCars = (searchText, listOfCars) =>{
  if(!searchText){
    return listOfCars
  }
  return listOfCars.filter(({car_model}) =>{
    car_model.toLowerCase().includes(searchText.toLowerCase())
  })
}

const Header = () => {
  const [carList, setCarList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(()=>{
    const Debounce = setTimeout(() =>{
      const filteredCards = filterCars(searchTerm, [])
      setCarList(filteredCards)
    }, 300)
    return () => clearTimeout(Debounce)
  }, [searchTerm])

  return (
    <>
      <div className='container_header'>
        <div className="header">
         <Link to='/House'><img src={Header_1} alt="" /></Link> 
          <p>8-(000)-000-00-00 МСК (9-21)</p>
          <div className="input">
            <input onChange={(e) => setSearchTerm(e.target.value)} className='input_header' type="text" placeholder='Поиск по сайту...' />
            <ul>
              {
                carList.map((car, index) =>{
                  return <li key={index}>{car.car_model}</li>
                })
              }
            </ul>
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
      <Burger />
    </>
  )
}

export default Header