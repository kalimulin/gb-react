import React, {useContext, useEffect, useState} from 'react'
import {HandySvg} from 'handy-svg'
import {Link, useLocation} from "react-router-dom"

import {CartContext} from "../../contexts/CartContext"

import header_logo from "../../img/header_logo.svg"
import search_icon from "../../img/search_icon.svg"
import close_icon from "../../img/icon-close.svg"
import {ReactComponent as Menu_icon} from "../../img/menu_icon.svg"
import {ReactComponent as User_icon} from "../../img/user_icon.svg"
import {ReactComponent as Cart_icon} from '../../img/cart_icon.svg'

import "./Header.scss"

function Menu(props) {
  if (props.showMenu) {
    return (
      <>
        <div className="header__overlay" onClick={props.handleMenuClick}></div>
        <nav className="header__popup-menu popup-menu">
          <div className="popup-menu__close" onClick={props.handleMenuClick}>
            <HandySvg src={close_icon} className="search_icon" width="12" height="19"/>
          </div>
          <div className="popup-menu__title">MENU</div>
          <ul className="popup-menu__items">
            <li className="popup-menu__menu-item">
              <div className="popup-menu__menu-item-title">
                <Link to="/catalog">MAN</Link>
              </div>
              <ul className="popup-menu__submenu">
                <li className="popup-menu__submenu-item">
                  <Link to="/catalog">Accessories</Link>
                </li>
                <li className="popup-menu__submenu-item">
                  <Link to="/catalog">Bags</Link>
                </li>
                <li className="popup-menu__submenu-item">
                  <Link to="/catalog">Denim</Link>
                </li>
                <li className="popup-menu__submenu-item">
                  <Link to="/catalog">T-Shirts</Link>
                </li>
              </ul>
            </li>
            <li className="popup-menu__menu-item">
              <div className="popup-menu__menu-item-title">
                <Link to="/catalog">WOMAN</Link>
              </div>
              <ul className="popup-menu__submenu">
                <li className="popup-menu__submenu-item">
                  <Link to="/catalog" className="">Accessories</Link>
                </li>
                <li className="popup-menu__submenu-item">
                  <Link to="/catalog" className="">Jackets &amp; Coats</Link>
                </li>
                <li className="popup-menu__submenu-item">
                  <Link to="/catalog" className="">Polos</Link>
                </li>
                <li className="popup-menu__submenu-item">
                  <Link to="/catalog" className="">T-Shirts</Link>
                </li>
                <li className="popup-menu__submenu-item">
                  <Link to="/catalog" className="">Shirts</Link>
                </li>
              </ul>
            </li>
            <li className="popup-menu__menu-item">
              <div className="popup-menu__menu-item-title">
                <Link to="/catalog" className="">KIDS</Link>
              </div>
              <ul className="popup-menu__submenu">
                <li className="popup-menu__submenu-item">
                  <Link to="/catalog" className="">Accessories</Link>
                </li>
                <li className="popup-menu__submenu-item">
                  <Link to="/catalog" className="">Jackets &amp; Coats</Link>
                </li>
                <li className="popup-menu__submenu-item">
                  <Link to="/catalog" className="">Polos</Link>
                </li>
                <li className="popup-menu__submenu-item">
                  <Link to="/catalog" className="">T-Shirts</Link>
                </li>
                <li className="popup-menu__submenu-item">
                  <Link to="/catalog" className="">Shirts</Link>
                </li>
                <li className="popup-menu__submenu-item">
                  <Link to="/catalog" className="">Bags</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </>
    )
  }
}

const Header = () => {
  const {cartItems} = useContext(CartContext)
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
  const [showMenu, setShowMenu] = useState(false)

  const handleMenuClick = () => {
    setShowMenu(!showMenu)
  }

  const location = useLocation()

  useEffect(() => {
    setShowMenu(false)
  }, [location])

  return (
    <header className="landing__header header">
      <div className="container header__wrap">
        <div className="header__logo">
          <Link className="logo" to="/">
            <img src={header_logo} alt="Letter b logo"/>
          </Link>
        </div>
        <div className="header__search">
          <HandySvg src={search_icon} className="search_icon" width="27" height="28"/>
        </div>
        <div className="header__menu" onClick={handleMenuClick}>
          <Menu_icon className="menu_icon"/>
        </div>
        <Link className="header__user" to="/registration">
          <User_icon className="user_icon"/>
        </Link>
        <Link className="header__cart" to="/cart">
          <Cart_icon className="cart_icon"/>
          {totalItems > 0 && <span className="cart_count">{totalItems}</span>}
        </Link>
        <Menu showMenu={showMenu} handleMenuClick={handleMenuClick}/>
      </div>
    </header>
  )
}

export default Header
