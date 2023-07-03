import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="item">
          <div className="form-subscribe">
            <form>
              <div className="form-subscribe__container">
                <label for="ssb_footer" className="form-subscribe__label">
                  Подписка на новостную рассылку
                </label>
                <input
                  id="ssb_footer"
                  type="email"
                  name="email"
                  title="Эл. почта"
                  placeholder="Эл. почта"
                  required="required"
                  className="form-subscribe__input"
                />
                <button type="submit" className="form-subscribe__btn btn">
                  Подписаться
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="item item-1">
          <ul className="footer__menu">
            <li className="footer-menu__item footer-menu__header">Помощь</li>
            {/* <li className="footer-menu__item">
              <Link className="footer-menu__link" to="">
                Сделать покупку в LIMÁ
              </Link>
            </li> */}
            <li className="footer-menu__item">
              <Link className="footer-menu__link" to="/help/1">
                Оплата
              </Link>
            </li>
            <li className="footer-menu__item">
              <Link className="footer-menu__link" to="/help/1">
                Доставка
              </Link>
            </li>
            <li className="footer-menu__item">
              <Link className="footer-menu__link" to="/help/2">
                Обмен и возврат
              </Link>
            </li>
          </ul>
        </div>
        <div className="item item-2">
          <ul className="footer__menu">
            <li className="footer-menu__item footer-menu__header">Контакты</li>
            <li className="footer-menu__item">
              <a href="tel:88001234567" className="footer-menu__link">
                8 800 123 45 67
              </a>
            </li>
          </ul>
          <div className="share-icons footer__share">
            <a
              href="https://t.me/limashop"
              title="Telegram"
              target="_blank"
              className="share-icons__item"
            >
              <div className="svg-icon share-icons__icon">
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                >
                  <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
                </svg>
              </div>
            </a>
            <a
              href="https://vk.com/limashop"
              title="ВКонтакте"
              target="_blank"
              className="share-icons__item"
            >
              <div className="svg-icon share-icons__icon">
                <svg
                  fill="#fff"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                >
                  <path d="M125,31.2c0.9-3,0-5.2-4.2-5.2h-14c-3.5,0-5.2,1.9-6.1,3.9c0,0-7.2,17.4-17.2,28.6c-3.3,3.3-4.7,4.3-6.5,4.3 c-0.9,0-2.2-1.1-2.2-4.1V31.1c0-3.5-1.1-5.2-4.1-5.2h-22c-2.2,0-3.5,1.6-3.5,3.3c0,3.4,5,4.2,5.6,13.7v20.6c0,4.5-0.8,5.3-2.6,5.3 c-4.7,0-16.3-17.5-23.2-37.4c-1.4-3.9-2.7-5.4-6.2-5.4H4.7c-4.1,0-4.7,1.9-4.7,3.9c0,3.7,4.7,22.1,22.1,46.5 C33.6,93,50,102,64.8,102c8.9,0,10-2,10-5.4V83.9c0-4.1,0.8-4.7,3.7-4.7c2,0,5.7,1.1,14,9.1c9.5,9.5,11.1,13.8,16.4,13.8h14 c4.1,0,6-2,4.9-6c-1.2-3.9-5.8-9.6-11.8-16.4c-3.3-3.8-8.1-8-9.6-10c-2-2.7-1.5-3.8,0-6.2C106.1,63.5,123.2,39.3,125,31.2z"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className="item item-3">
          <ul className="footer__menu">
            <li className="footer-menu__item footer-menu__header">Компания</li>
            <li className="footer-menu__item">
              <Link className="footer-menu__link" to="/about">
                О компании
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="bottom">
        <div className="left">
          <span className="logo">Lamastore</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
