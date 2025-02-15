import "./Pellentesque.scss";
import yellowBlock from "@/assets/coloredBlock/yellow-block.svg";
import { questions } from "./data";
import youtube from "@assets/socialicons/youtubeColored.svg";
const Pellentesque = () => {
  return (
    <section className="pellentesque">
      <div className="container">
        <div className="pellentesque__vitae-block">
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
                <img src={youtube} alt="" loading="eager" aria-hidden="true" />
                <span>Watch video presentation</span>
              </a>
            </div>
          </div>
          <img src={yellowBlock} className="pellentesque__yellowBlock" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Pellentesque;
