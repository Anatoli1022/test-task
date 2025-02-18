import "./Reviews.scss";
import quotes from "@assets/reviews/quotes.svg";
import star from "@assets/reviews/star.svg";
import arrow from "@assets/reviews/arrow.svg";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { swiperData } from "./data";

const Reviews = () => {
  const swiperRef = useRef(null); // Создаем ссылку на Swiper

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "" + "</span>";
    },
  };

  // Функция для перехода к следующему слайду
  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext(); // Переход к следующему слайду
    }
  };

  return (
    <div className="reviews">
      <div className="reviews__container container">
        <div>
          <img
            src={quotes}
            className="reviews__quote-image"
            alt=""
            loading="lazy"
            aria-hidden="true"
          />
          <blockquote className="reviews__blockquote">
            Quisque vulputate odio vitae imperdiet sodales
          </blockquote>
        </div>

        <Swiper
          ref={swiperRef}
          pagination={pagination}
          modules={[Pagination]}
          className="reviews__swiper"
          loop={true} // Включаем зацикливание
        >
          {swiperData.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="reviews__slider-content">
                <div className="reviews__wrapper-star">
                  <div className="reviews__star-container">
                    {Array.from({ length: item.stars }, (_, index) => (
                      <img
                        key={index}
                        src={star}
                        alt=""
                        loading="lazy"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="reviews__number">({item.stars}/5)</span>
                </div>
                <h3 className="reviews__review-title">{item.title}</h3>
                <p className="reviews__review-description">
                  {item.description}
                </p>
                <p className="reviews__review-text">{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Кнопка "Next" */}

        <button className="reviews__next-button" onClick={handleNextSlide}>
          <img
            src={arrow}
            className="reviews__image-button"
            alt=""
            loading="lazy"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
};

export default Reviews;
