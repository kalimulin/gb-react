import React, { useContext } from 'react'
import {Link} from "react-router-dom"

import add_to_cart_btn from "../../img/add_to_cart_btn.svg"

import { CartContext } from "../../contexts/CartContext"

import "./ProductItem.scss"

const ProductItem = ({ id, title, description, price, imageUrl }) => {
  const { addToCart } = useContext(CartContext)

  const handleAddToCart = () => {
    addToCart(id)
  }

  return (
    <div className="product">
      <div className="product__image">
        <img src={imageUrl} alt="Product image"/>
        <div className="product__overlay">
          <div className="product__add" onClick={handleAddToCart}>
            <img className="product__add-icon" src={add_to_cart_btn} alt="cart"/>
            <span>Add to Cart</span>
          </div>
        </div>
      </div>
      <Link to="/product" className="product__item-text">
        <div className="product__item-title">{title}</div>
        <div className="product__item-desc">{description}</div>
        <div className="product__item-price">${price.toFixed(2)}</div>
      </Link>
    </div>
  )
}

export default ProductItem
