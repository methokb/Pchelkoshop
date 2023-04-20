import React, { Component } from 'react'
import './Item.module.scss'
import img from ".././/.///..//Rectangle 65.png"

export class Item extends Component {
  render() {
    return (
        <div className='item'>
            <img src={img} />
            <h2>{this.props.item.title}</h2>
            <h3>{this.props.item.time}</h3>
            <h3>{this.props.item.num}</h3>
            <h3>{this.props.item.prep}</h3>
            <h3>{this.props.item.plc}</h3>
            <h3>{this.props.item.diff}</h3>
            <h2>{this.props.item.price}</h2>
            <button className='add-to-cart'>ДОБАВИТЬ В КОРЗИНУ</button>
        </div>
        )
  }
}

export default Item