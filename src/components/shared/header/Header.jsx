import "./Header.scss";
import logo from "@assets/logo.svg";
import iconMenu from "@assets/header/iconMenu.svg";

import border from "@assets/header/border.svg";
import { useState } from "react";
import { navigation, social } from "./data";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const Header = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <header className="header">
      <div className="header__container container">
        <img
          src={logo}
          alt=""
          className="header__logo"
          loading="eager"
          aria-hidden="true"
        />

        <div className="header__block">
          <nav>
            <ul className="header__list">
              {navigation.map((item, i) => (
                <li key={i} className="header__list-item">
                  <Link to={item.link} className="header__item-link">
                    {item.text}
                  </Link>
                  {isActive(item.link) ? (
                    <img src={border} loading="eager" aria-hidden="true" />
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="header__block">
          <ul className="header__list-social">
            {social.map((item, i) => (
              <li key={i}>
                <a href={item.link} className="header__link-social">
                  <img
                    className="header__image-social"
                    src={item.image}
                    alt={item.alt}
                    loading="eager"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
            <li>
              <button className="header__button">Сontact us</button>
            </li>
          </ul>
        </div>

        <button
          className="header__button-menu"
          onClick={() => setActiveMenu((prevState) => !prevState)}
          type="button"
        >
          <img src={iconMenu} alt="" />
        </button>

        {activeMenu && (
          <div className="header__menu">
            <nav>
              <ul className="header__list">
                {navigation.map((item, i) => (
                  <li key={i} className="header__list-item">
                    <Link to={item.link} className="header__item-link">
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>{" "}
            <div className="header__wrapper-social">
              <ul className="header__list-social">
                {social.map((item, i) => (
                  <li key={i} className="header__item-social">
                    <a href={item.link} className="header__link-social">
                      <img
                        className="header__image-social"
                        src={item.image}
                        alt={item.alt}
                        loading="eager"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
              <button className="header__button">Сontact us</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
