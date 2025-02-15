import "./Meet.scss";
import { data } from "./data";

const Meet = () => {
  return (
    <section className="meet">
      <div className="container">
        <h2 className="meet__title">Meet our leadership</h2>

        <ul className="meet__list">
          {data.map((item, i) => (
            <li key={i}>
              <img
                src={item.image}
                className="meet__list-image"
                alt={item.title}
                loading="lazy"
              />
              <h3 className="meet__list-title">{item.title}</h3>
              <p className="meet__list-text"> {item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Meet;
