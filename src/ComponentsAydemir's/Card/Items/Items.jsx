import React, { Component } from 'react'
import Item from "../Item/Item"
import './Items.module.scss'

export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(el => (
            <Item key={el.id} item={el} />
        ))}
      </main>
    )
  }
}

export default Items