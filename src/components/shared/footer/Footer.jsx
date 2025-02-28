import logo from "@assets/logo.svg";
import { social, navigation } from "./data";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div>
          <img src={logo} className="footer__logo" alt="" loading="lazy" aria-hidden="true" />
        </div>
        <div className="footer__content-wrapper">
          <div className="footer__content">
            <p className="footer__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <div>
              <h2 className="footer__title">Contacts</h2>
              <div className="footer__wrapper-contacts">
                <span className="footer__contact-span">Phone: </span>
                <a className="footer__contact-link" href="tel:+123456789">
                  (123) 456-789
                </a>
              </div>
              <div>
                <span className="footer__contact-span">E-mail: </span>
                <a
                  className="footer__contact-link"
                  href="mailto:contactus@site.com"
                >
                  contactus@site.com
                </a>
              </div>
            </div>
            <div>
              <h2 className="footer__title">Get Social with Us</h2>
              <ul className="footer__list-social">
                {social.map((item, i) => (
                  <li key={i}>
                    <a href={item.link} className="footer__link-social">
                      <img
                        className="footer__image-social"
                        src={item.image}
                        alt={item.alt}
                        loading="lazy"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <nav className="footer__navigation">
            <ul className="footer__navigation-list">
              {navigation.map((item, i) => (
                <li key={i}>
                  <Link to={item.link} className="footer__navigation-link">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
