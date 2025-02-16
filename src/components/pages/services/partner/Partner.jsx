import "./Partner.scss";
import travels from "@assets/partner/travelers.jpg";
import message from "@assets/partner/message.svg";

const Partner = () => {
  return (
    <section className="partner">
      <div className="partner__container container">
        <img src={travels} alt="" loading="eager" aria-hidden="true" />

        <div className="partner__wrapper-form">
          <h2 className="partner__title">Partner With Us</h2>
          <form className="partner__form" action="">
            <div className="partner__input-wrapper">
              <input
                type="text"
                placeholder="Enter Your First Name"
                className="partner__input"
              />
              <input
                type="text"
                placeholder="Enter Your Last Name"
                className="partner__input"
              />
            </div>
            <div className="partner__input-wrapper">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="partner__input"
              />
              <input type="tel" className="partner__input" />
            </div>
            <div className="partner__input-wrapper">
              <input
                type="text"
                placeholder="Enter Your Businesss Name"
                className="partner__input"
              />
            </div>
            <select
              className="partner__select"
              name="Choose Your amount of Employees"
              id=""
            >
              <option value="null">Choose Your amount of Employees</option>
              <option value="null">"Sad music is playing"</option>
              <option value="null">Lorem lorem lorem</option>
              <option value="null">Lorem inpus? inpum lorem ohh...</option>
              <option value="null">
                No, not now lorem inpsum... Just Not now...
              </option>
              <option value="null">What are we here for, lorem ipsum? </option>
              <option value="null">Loreeeeeeem ipsuuuuuummmmm</option>
            </select>
            <div className="partner__wrapper-button">
              <button type="send" className="partner__button button button-violet">
                <img src={message} alt="" loading="eager" aria-hidden="true" />
                <span>Contact Us</span>
              </button>
              <p className="partner__sub-text">
                *By clicking you agree to the processing of personal data
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Partner;
