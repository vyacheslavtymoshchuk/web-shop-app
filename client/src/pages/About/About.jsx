import React from "react";
import "./About.scss";

function About() {
  return (
    <div className="about__container">
      <div className="about__sideLeft">
        <div className="about__sideContent aboutSide">
          <div className="aboutSide__top"></div>
        </div>
      </div>
      <div className="about__main">
        <div className="about__text-content page-text">
          <h1>О компании</h1>
          <div className="about__com">
            <p>
              Бренд модной женской одежды, созданный в 2023 году.
            </p>
            <p>
              Наши дизайнеры вдохновляются&nbsp; последними мировыми трендами
              для того, чтобы дать каждой женщине возможность подобрать то, что
              лучше всего подходит именно ей и отражает ее индивидуальность.
            </p>
            <p style={{ marginBottom: "80px" }}>
              Мы внимательно относимся к выбору материалов, чтобы созданные нами
              изделия в течение долгого времени сохраняли первоначальный вид.
            </p>
            <img src="/img/custom-size.jpg" alt="about-img" />
          </div>
        </div>
      </div>
      <div className="about__sideRight">
        <div className="about__sideContent aboutSide">
          <div className="aboutSide__content">
            <div className="aboutSide__top"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
