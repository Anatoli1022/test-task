import subtract from "@assets/hero/subtract.png";
import subtractMobile from "@assets/hero/subtractMobile.png";
import youtube from "@assets/socialicons/youtubeColored.svg";
import dots from "@assets/hero/dots.jpg";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__content">
          <h1 className="hero__title">Lorem Ipsum</h1>
          <p className="hero__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vitae blandit orci, et condimentum massa. Ut erat ipsum, lobortis et
            lacus sed, egestas egestas orci. Sed at sagittis libero, ac feugiat
            nunc.
          </p>
          <div className="hero__wrapper-buttons">
            <button className="button button-violet">Partner with us</button>
            <div className="hero__line"></div>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="hero__link-youtube"
              target="_blank"
            >
              <img src={youtube} alt="" loading="eager" aria-hidden="true" />
              <span className="hero__link-text">Watch</span>
            </a>
          </div>
        </div>

        <div className="hero__image-container">
          <img
            src={subtract}
            className="hero__image"
            alt=""
            loading="eager"
            aria-hidden="true"
          />
          <img
            src={subtractMobile}
            className="hero__image-mobile"
            alt=""
            loading="eager"
            aria-hidden="true"
          />

          <img
            src={dots}
            className="hero__image-dots"
            alt=""
            loading="eager"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
