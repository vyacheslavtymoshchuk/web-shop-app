import React from "react";
import "./Refund.scss";

function Refund() {
  return (
    <div className="help-refund__container">
      <div className="help-refund__sideLeft">
        <div className="help-refund__sideContent help-refundSide">
          <div className="help-refundSide__top"></div>
        </div>
      </div>
      <div className="help-refund__main">
        <div className="help-refund__text-content page-text">
          <h1>Сервис и поддержка</h1>
          <div className="help-refund__viewHelp">
            <div className="viewHelp__main">
              <ul className="anchors">
                <li>
                  <a href="#product-exchange">ОБМЕН ТОВАРА</a>
                </li>
                <li>
                  <a href="#return-methods">СПОСОБЫ ВОЗВРАТА</a>
                </li>
                <li>
                  <a href="#refunds">ВОЗВРАТ ДЕНЕЖНЫХ СРЕДСТВ</a>
                </li>
              </ul>
              <div className="wrap-tab-content">
                <div className="tab-content">
                  <p id="product-exchange" class="headline">
                    <strong>ОБМЕН ТОВАРА</strong>
                  </p>
                  <p>
                    Обмен товара надлежащего качества, приобретенного в
                    интернет-магазине, производится через процедуру «Возврат
                    товара».
                  </p>
                  <p id="return-methods" class="headline">
                    <strong>СПОСОБЫ ВОЗВРАТА</strong>
                  </p>
                  <p>
                    Товар надлежащего качества можно вернуть при условии, что он
                    не был в употреблении и сохранил все свои потребительские
                    свойства, в течение 30 дней с момента покупки. При возврате
                    товара ненадлежащего качества после проведения экспертизы и
                    установления факта брака, мы возместим стоимость товара и
                    почтовые расходы.
                  </p>
                  <p>
                    Для возврата товара вы можете выбрать одну из следующих
                    опций:
                  </p>
                  <p class="headline-dot">ФИРМЕННЫЙ МАГАЗИН</p>
                  <p>
                    Вы можете обратиться в один из наших фирменных магазинов.
                  </p>
                  <p class="headline-dot">ПОЧТА РОССИИ</p>
                  <p>
                    Вы можете отправить товар нам почтой России. Для этого вам
                    необходимо:
                  </p>
                  <ol>
                    <li>
                      Заполнить заявление на возврат и вложить в упаковку с
                      товаром.
                    </li>
                    <li>
                      Герметично упаковать товар в первичную или другую
                      аналогичную упаковку и оформить отправление посылки в
                      ближайшем к вам отделении связи.
                    </li>
                  </ol>
                  <p>
                    Адрес для отправки: 142030, г.Домодедово, село Ям, Кес-Ям,
                    с.1, получатель: ООО «СТИЛЬ ТРЕЙД»
                  </p>
                  <p>
                    Стоимость возврата оплачивается покупателем по тарифам
                    перевозчика.
                  </p>
                  <p>
                    С тарифами на возврат можно ознакомиться в отделении связи
                    Почты России.
                  </p>
                  <p id="refunds" class="headline">
                    <strong>ВОЗВРАТ ДЕНЕЖНЫХ СРЕДСТВ</strong>
                  </p>
                  <p>
                    Если заказ был оплачен картой на сайте, то Возврат денежных
                    средств осуществляется в течение 10 календарных дней с даты
                    поступления товара на склад продавца, на ту же карту, с
                    которой был оплачен товар.
                  </p>
                  <p>
                    В случае оплаты заказа наличными или банковской картой при
                    получении, возврат будет осуществлен по реквизитам,
                    указанным в заявлении в течение 10 календарных дней с даты
                    поступления товара на склад продавца.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="help-refund__sideRight">
        <div className="help-refund__sideContent help-refundSide">
          <div className="help-refundSide__content">
            <div className="help-refundSide__top"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Refund;
