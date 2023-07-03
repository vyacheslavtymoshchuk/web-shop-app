import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";
import { TfiClose } from "react-icons/tfi";

function Menu({ active, setActive }) {
  return (
    <div
      className={active ? "menu active left" : "menu"}
      onClick={() => setActive(false)}
    >
      {/* <div className="menu__blur" /> */}
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <TfiClose className="close-icon" onClick={() => setActive(false)} />
        <nav className="menu__container">
          <ul className="menu__list">
            <li className="menu__item">
              <Link className="menu__link" to="/products/1">
                Каталог
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to="/about">
                О бренде
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to="/help/2">
                Оплата и доставка
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to="/help/1">
                Обмен и возврат
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
