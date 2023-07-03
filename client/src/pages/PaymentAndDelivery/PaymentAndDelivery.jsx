import React from "react";
import "./PaymentAndDelivery.scss";

function PaymentAndDelivery() {
  return (
    <div className="help-pad__container">
      <div className="help-pad__sideLeft">
        <div className="help-pad__sideContent help-padSide">
          <div className="help-padSide__top"></div>
        </div>
      </div>
      <div className="help-pad__main">
        <div className="help-pad__text-content page-text">
          <h1>Сервис и поддержка</h1>
          <div className="help-pad__viewHelp viewHelp">
            <div className="viewHelp__main">
              <ul className="anchors">
                <li>
                  <a href="#delivery-terms">УСЛОВИЯ ДОСТАВКИ</a>
                </li>
                <li>
                  <a href="#cost-of-delivery">СТОИМОСТЬ ДОСТАВКИ</a>
                </li>
                <li>
                  <a href="#payment-methods">СПОСОБЫ ОПЛАТЫ</a>
                </li>
              </ul>
              <div className="wrap-tab-content">
                <div className="tab-content">
                  <p id="delivery-terms" className="headline">
                    <strong>УСЛОВИЯ ДОСТАВКИ</strong>
                  </p>
                  <p style={{ marginBottom: "8px" }}>
                    При оформлении заказа вы можете выбрать удобный тип доставки
                    из предложенных. По количеству товаров в заказе действуют
                    следующие ограничения:
                  </p>
                  <p
                    className="headline-dot"
                    typeof="disc"
                    style={{ textTransform: "none" }}
                  >
                    Все категории товаров – не более 7 товаров для заказов с
                    оплатой при получении
                  </p>
                  <p className="headline-dot" style={{ marginTop: "24px" }}>
                    САМОВЫВОЗ ИЗ МАГАЗИНА
                  </p>
                  <p>
                    При получении заказа в магазине доступна примерка и
                    частичный выкуп. Срок хранения заказа — 7 дней для
                    оплаченных заказов, 3 дня для заказов с оплатой при
                    получении. Вы можете продлить срок хранения своего заказа в
                    магазине 1 раз не более чем на 3 дня. Для получения
                    предоплаченного заказа вам необходимо предъявить
                    удостоверение личности и номер заказа.
                  </p>
                  <p className="headline-dot">ДОСТАВКА КУРЬЕРОМ НА ДОМ</p>
                  <p>
                    Доставка осуществляется в будние и выходные дни (пн-вс) с
                    9:00 до 18:00. Перед доставкой курьер позвонит вам для
                    уточнения деталей доставки. Примерка и частичный выкуп не
                    предусмотрен.
                  </p>
                  <p className="headline-dot">ПУНКТ ВЫДАЧИ</p>
                  <p>
                    В момент доставки заказа в пункт выдачи
                    вам поступит SMS с кодом получения заказа. Внимание! Не
                    удаляйте текст сообщения до получения отправления. В пункте
                    выдачи необходимо сообщить код получения заказа,
                    отправленный вам в SMS, выбрать способ оплаты (если заказ не
                    предоплаченный) и оплатить наличными или банковской картой.
                  </p>
                  <p id="cost-of-delivery" className="headline">
                    <strong>СТОИМОСТЬ ДОСТАВКИ</strong>
                  </p>
                  <p>Доставка осуществляется бесплатно по всей России.</p>
                  <p id="payment-methods" class="headline">
                    <strong>СПОСОБЫ ОПЛАТЫ</strong>
                  </p>
                  <p className="headline-dot">Банковской картой на сайте</p>
                  <p>
                    Дополнительная скидка -5% для заказов по России от 4000 руб.
                    при оплате картой онлайн.
                  </p>
                  <p>
                    Оплата заказа производится моментально, через процессинговый
                    центр Stripe payment. Вам нужно ввести данные банковской
                    карты. Вы оплачиваете только стоимость покупки,
                    комиссия при оплате картой на сайте не взимается. После
                    подтверждения оплаты ваш заказ будет сформирован и
                    отправлен.
                  </p>
                  <p className="headline-dot">
                    Наличными деньгами или банковской картой при получении
                  </p>
                  <p>
                    Произвести оплату наличными средствами или банковской картой
                    можно при получении заказа. При доставке курьером вы можете
                    проверить целостность упаковки и оплатить заказ.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="help-pad__sideRight">
        <div className="help-pad__sideContent help-padSide">
          <div className="help-padSide__content">
            <div className="help-padSide__top"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentAndDelivery;
