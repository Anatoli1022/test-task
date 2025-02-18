import "./Sapien.scss";
import line from "@assets/sapien/line.svg";
import redBlock from "@assets/sapien/red-block.svg";
import blueBlock from "@assets/sapien/blue-block.svg";
import greenBlock from "@assets/sapien/green-block.svg";
import fishing from "@assets/sapien/fishing.svg";
import cloud from "@assets/sapien/cloud.svg";
import magnifier from "@assets/sapien/magnifier.svg";

const Sapien = () => {
  return (
    <section className="sapien">
      <div className="container">
        <p className="sapien__text">Vivamus a est interdum</p>
        <h2 className="sapien__title">Nam sapien massa</h2>

        <div className="sapien__wrapper">
          <img
            src={line}
            className="sapien__image-line"
            alt=""
            loading="lazy"
            aria-hidden="true"
          />
          <ul className="sapien__list">
            <li className="sapien__list-item">
              <div className="sapien__item-container">
                <img
                  src={fishing}
                  alt=""
                  className="sapien__item-image"
                  loading="lazy"
                  aria-hidden="true"
                />
                <div className="sapien__wrapper-text">
                  <h3 className="sapien__item-title">
                    Sed iaculis risus nulla
                  </h3>
                  <p className="sapien__item-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas vitae blandit orci, et condimentum massa.
                  </p>
                </div>
              </div>
              <img
                src={redBlock}
                alt=""
                className="sapien__image-block"
                loading="lazy"
                aria-hidden="true"
              />
            </li>
            <li className="sapien__list-item">
              <div className="sapien__item-container">
                <img
                  src={cloud}
                  alt=""
                  className="sapien__item-image"
                  loading="lazy"
                  aria-hidden="true"
                />
                <div className="sapien__wrapper-text">
                  <h3 className="sapien__item-title">Quisque sed mauris</h3>
                  <p className="sapien__item-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas vitae blandit orci, et condimentum massa.
                  </p>
                </div>
              </div>
              <img
                src={blueBlock}
                alt=""
                className="sapien__image-block"
                loading="lazy"
                aria-hidden="true"
              />
            </li>
            <li className="sapien__list-item">
              <div className="sapien__item-container">
                <img
                  src={magnifier}
                  loading="lazy"
                  aria-hidden="true"
                  alt=""
                  className="sapien__item-image"
                />
                <div className="sapien__wrapper-text">
                  <h3 className="sapien__item-title">Phasellus sed aliquam</h3>
                  <p className="sapien__item-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas vitae blandit orci, et condimentum massa.
                  </p>
                </div>
              </div>
              <img
                src={greenBlock}
                loading="lazy"
                aria-hidden="true"
                alt=""
                className="sapien__image-block"
              />
            </li>
          </ul>
        </div>

        <div className="sapien__button-wrapper">
          <button className="button button-violet">Partner with us</button>
        </div>
      </div>
    </section>
  );
};

export default Sapien;
