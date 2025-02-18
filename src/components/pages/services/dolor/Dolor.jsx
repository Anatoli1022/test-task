import "./Dolor.scss";
import lines from "@assets/dolor/lines.svg";
import line from "@assets/dolor/line.svg";
import { list, listInfo } from "./data";

import { useState } from "react";

const Dolor = () => {
  const [selectInfro, setSelectInfo] = useState(0);
  const onClickSelect = (number) => setSelectInfo(number);
  return (
    <section className="dolor">
      <div className="container">
        <div className="dolor__container">
          <h2 className="dolor__title">Lorem ipsum dolor sit amet</h2>
          <p className="dolor__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vitae blandit orci, et condimentum massa.
          </p>
          <div className="dolor__wrapper">
            <img
              src={lines}
              className="dolor__image-line"
              alt=""
              loading="lazy"
              aria-hidden="true"
            />
            <ul className="dolor__list">
              {list.map((item, i) => (
                <li key={i} className="dolor__list-item">
                  <img
                    src={line}
                    alt=""
                    className="dolor__item-line"
                    loading="lazy"
                    aria-hidden="true"
                  />
                  <img
                    src={item.image}
                    alt=""
                    className="dolor__item-image"
                    loading="lazy"
                    aria-hidden="true"
                  />
                  <div className="dolor__item-container">
                    <h3 className="dolor__item-title">{item.title}</h3>
                    <p className="dolor__item-text">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="dolor__info-wrapper">
          <div className="dolor__info-container">
            <p className="dolor__info-text">{listInfo[selectInfro].text}</p>
            <ul className="dolor__info-list">
              {listInfo.map((item, i) => (
                <li
                  key={i}
                  className={`dolor__info-item ${
                    selectInfro === i ? "item-active" : ""
                  }`}
                  onClick={() => onClickSelect(i)}
                >
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    aria-hidden="true"
                  />
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dolor;
