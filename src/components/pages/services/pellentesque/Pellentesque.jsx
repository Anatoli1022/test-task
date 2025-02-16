import "./Pellentesque.scss";
import yellowBlock from "@/assets/coloredBlock/yellow-block.svg";
import { questions } from "./data";
import youtube from "@assets/socialicons/youtubeColored.svg";
import tent from "@assets/pellentesque/tent.svg";
import house from "@assets/pellentesque/house.png";

const Pellentesque = () => {
  return (
    <section className="pellentesque">
      <div className="container">
        <div className="pellentesque__vitae">
          <div>
            <h2 className="pellentesque__vitae-title">Pellentesque vitae</h2>
            <p className="pellentesque__vitae-text">
              Nulla congue tortor sit amet ultricies sollicitudin. Aliquam
              lobortis vehicula leo vitae rutrum. Proin sit amet risus vel nulla
              vehicula hendrerit. Etiam vitae ullamcorper est. Quisque vulputate
              odio vitae imperdiet sodales. Quisque sed mauris et ipsum
              efficitur vehicula eu et neque.
            </p>
            <ul className="pellentesque__list">
              {questions.map((item, i) => (
                <li key={i} className="pellentesque__list-item">
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    aria-hidden="true"
                  />
                  <span className="pellentesque__item-text">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="pellentesque__wrapper-buttons">
              <button className="button button-blue">Try it now</button>
              <div className="pellentesque__line"></div>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                className="pellentesque__link-youtube"
                target="_blank"
              >
                <img src={youtube} alt="" loading="lazy" aria-hidden="true" />
                <span className="pellentesque__youtube-text">
                  Watch video presentation
                </span>
              </a>
            </div>
          </div>
          <img
            src={yellowBlock}
            className="pellentesque__yellow-block"
            alt=""
          />
        </div>

        <div className="pellentesque__wrapper">
          <div className="pellentesque__aliquam">
            <div className="pellentesque__aliquam-wrapper">
              <img src={tent} alt="" loading="lazy" aria-hidden="true" />
            </div>
            <h2 className="pellentesque__aliquam-title">Aliquam</h2>
            <ul className="pellentesque__aliquam-list">
              <li className="pellentesque__aliquam-item">
                <span className="pellentesque__aliquam-dot"></span>
                <span>Duis et lacus velit</span>
              </li>
              <li className="pellentesque__aliquam-item">
                <span className="pellentesque__aliquam-dot"></span>
                <span>Maecenas non dapibus</span>
              </li>
              <li className="pellentesque__aliquam-item">
                <span className="pellentesque__aliquam-dot"></span>
                <span>Integer nec enim</span>
              </li>
              <li className="pellentesque__aliquam-item">
                <span className="pellentesque__aliquam-dot"></span>
                <span>Aenean vulputate</span>
              </li>
            </ul>
          </div>
          <div className="pellentesque__nullam">
            <div className="pellentesque__nullam-content">
              <h2 className="pellentesque__nullam-title">Nullam</h2>
              <ul className="pellentesque__nullam-list">
                <li className="pellentesque__nullam-item">
                  <span className="pellentesque__nullam-dot"></span>
                  <span>Duis et lacus velit</span>
                </li>
                <li className="pellentesque__nullam-item">
                  <span className="pellentesque__nullam-dot"></span>
                  <span>Maecenas non dapibus</span>
                </li>
                <li className="pellentesque__nullam-item">
                  <span className="pellentesque__nullam-dot"></span>
                  <span>Integer nec enim</span>
                </li>
                <li className="pellentesque__nullam-item">
                  <span className="pellentesque__nullam-dot"></span>
                  <span>Aenean vulputate</span>
                </li>
              </ul>
              <button className="pellentesque__nullam-button">
                Get Exceptional Results
              </button>
            </div>
            <img
              src={house}
              className="pellentesque__nullam-image"
              alt=""
              loading="lazy"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pellentesque;
