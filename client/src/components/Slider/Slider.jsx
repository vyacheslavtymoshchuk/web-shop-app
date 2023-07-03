import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "/img/slider_01.jpg",
    "/img/slider_02.jpg",
    "/img/slider_03.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="slider__zone icon-prev">
        <div className="icon" onClick={prevSlide}>
          {/* <SlArrowLeft /> */}
          <svg data-v-11123d14="" data-v-61da64da="" xmlns="http://www.w3.org/2000/svg" fill-opacity="1" height="34" width="18" viewBox="0 0 18 34" class="svg-icon" data-v-3230e81c=""> <path data-v-11123d14="" d="M1.78123 17L17.1902 32.3501C17.4831 32.643 17.4831 33.1179 17.1902 33.4108C16.8973 33.7037 16.4225 33.7037 16.1296 33.4108L0.219669 17.5009C-0.0732231 17.208 -0.0732231 16.7331 0.219669 16.4402L16.1296 0.530339C16.4225 0.237446 16.8973 0.237446 17.1902 0.530339C17.4831 0.823232 17.4831 1.29811 17.1902 1.591L1.78123 17Z" fill="#454545"></path></svg>
        </div>
      </div>
      <div className="slider__zone icon-next">
      <div className="icon" onClick={nextSlide}>
          {/* <SlArrowRight /> */}
          <svg data-v-11123d14="" data-v-61da64da="" xmlns="http://www.w3.org/2000/svg" fill-opacity="1" height="34" width="18" viewBox="0 0 18 34" class="svg-icon" data-v-3230e81c=""> <path data-v-11123d14="" d="M15.6287 17L0.21967 32.3501C-0.0732233 32.643 -0.0732233 33.1179 0.21967 33.4108C0.512563 33.7037 0.987437 33.7037 1.28033 33.4108L17.1902 17.5009C17.4831 17.208 17.4831 16.7331 17.1902 16.4402L1.28033 0.530339C0.987437 0.237446 0.512563 0.237446 0.21967 0.530339C-0.0732233 0.823232 -0.0732233 1.29811 0.21967 1.591L15.6287 17Z" fill="#454545"></path></svg>
        </div>
      </div>
    </div>
  );
};

export default Slider;
