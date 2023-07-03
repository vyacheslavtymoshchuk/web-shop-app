import React, { useState } from "react";
import {
  CiSearch,
  CiShoppingCart,
  CiUser,
  CiHeart,
  CiMenuBurger,
} from "react-icons/ci";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import Menu from "../Menu/Menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="navbar">
      <div className="columns">
        <div className="hamburger-menu burger">
          <CiMenuBurger
            className="burger-icon"
            onClick={() => setMenuActive(!menuActive)}
          />
          <Menu active={menuActive} setActive={setMenuActive} />
        </div>
        <div className="logo">
          <Link className="logo-link" to="/">
            LIMÁ
          </Link>
        </div>
      </div>
      <div className="columns">
        {/* <div className="search-box btn-control">
          <form action="/catalog/">
            <button type="button" className="serach-box__button">
              <CiSearch id="search-icon" className="search-icon" />
            </button>
            <input type="text" placeholder className="search-box__input" />
          </form>
        </div> */}
        {/* <div className="btn-control">
          <CiUser className="user-icon" />
        </div> */}
        {/* <div className="btn-control">
          <CiHeart className="favorite-icon" />
        </div> */}
        <div className="btn-control-cart" onClick={() => setOpen(!open)}>
          <CiShoppingCart className="cart-icon" />
          <span>{products.length}</span>
        </div>
      </div>
      {open && <Cart />}
    </div>
    // <header className="header">
    //   <nav className="navbar container">
    //     <div className="wrapper">
    //       <div className="left">
    //         <div
    //           className="icon-burger"
    //           onClick={() => setMenuActive(!menuActive)}
    //         >
    //           <CiMenuBurger />
    //         </div>
    //         <Menu active={menuActive} setActive={setMenuActive} />
    //         {/* <div className="item">
    //           <Link className="link" to="/products/1">
    //             Каталог
    //           </Link>
    //         </div> */}
    //         <div className="logo">
    //           <Link className="link" to="/">
    //             LIMÁ
    //           </Link>
    //         </div>
    //       </div>
    //       <div className="right">
    //         {/* <div className="item">
    //         <Link className ="link" to="/">О бренде</Link>
    //       </div>
    //       <div className="item">
    //         <Link className ="link" to="/">Контакты</Link>
    //       </div> */}
    //         <div className="icons">
    //           <CiSearch className="icon-search" />
    //           <CiUser className="icon-user" />
    //           <CiHeart className="icon-favorite" />
    //           <div className="cartIcon" onClick={() => setOpen(!open)}>
    //             <CiShoppingCart className="icon-cart" />
    //             <span>{products.length}</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     {open && <Cart />}
    //   </nav>
    // </header>
  );
};

export default Navbar;
