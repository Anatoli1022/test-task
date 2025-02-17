import "./Partner.scss";
import travels from "@assets/partner/travelers.jpg";
import message from "@assets/partner/message.svg";
import forest from "@assets/partner/forest.png";
import { useState } from "react";

const Partner = () => {
  const [regionCode, setRegionCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const regionCodes = [
    { code: "(+1)", country: "USA", flag: "https://flagcdn.com/us.svg" },
    { code: "(+44)", country: "UK", flag: "https://flagcdn.com/gb.svg" },
    { code: "(+7)", country: "Russia", flag: "https://flagcdn.com/ru.svg" },
  ];

  const handleRegionChange = (event) => {
    setRegionCode(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const selectedRegion = regionCodes.find(
    (region) => region.code === regionCode
  );
  const flagUrl = selectedRegion ? selectedRegion.flag : "";

  return (
    <section className="partner">
      <div className="partner__container ">
        <img
          src={travels}
          className="partner__image-travels"
          alt=""
          loading="eager"
          aria-hidden="true"
        />
        <img
          src={forest}
          className="partner__image-forest"
          alt=""
          loading="eager"
          aria-hidden="true"
        />
        <div className="partner__wrapper-form">
          <h2 className="partner__title">Partner With Us</h2>
          <form className="partner__form" action="">
            <div className="partner__container-form">
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
                <div className="partner__telephone-wrapper">
                  <div className="partner__code-wrapper">
                    <select
                      className="partner__select-code"
                      value={regionCode}
                      onChange={handleRegionChange}
                    >
                      {regionCodes.map((region) => (
                        <option key={region.code} value={region.code}>
                          {region.code}
                        </option>
                      ))}
                    </select>

                    <img
                      className="partner__image-flag"
                      src={flagUrl || regionCodes[0].flag}
                      alt=""
                      loading="lazy"
                      aria-hidden="true"
                    />
                  </div>

                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    placeholder="000000000"
                    className="partner__input telephone-input"
                  />
                </div>
              </div>

              <input
                type="text"
                placeholder="Enter Your Businesss Name"
                className="partner__input"
              />

              <select
                className="partner__select"
                name="Choose Your amount of Employees"
                id=""
              >
                <option value="null">Choose Your amount of Employees</option>
                <option value="Sad music is playing">
                  "Sad music is playing"
                </option>
                <option value="Lorem lorem lorem">Lorem lorem lorem</option>
                <option value="Lorem inpus? inpum lorem ohh...">
                  Lorem inpus? inpum lorem ohh...
                </option>
                <option value="No, not now lorem inpsum... Just Not now...">
                  No, not now lorem inpsum... Just Not now...
                </option>
                <option value="What are we here for, lorem ipsum?">
                  What are we here for, lorem ipsum?
                </option>
                <option value="Loreeeeeeem ipsuuuuuummmmm">
                  Loreeeeeeem ipsuuuuuummmmm
                </option>
              </select>
            </div>
            <div className="partner__wrapper-button">
              <button
                type="send"
                className="partner__button button button-violet"
              >
                <img
                  src={message}
                  className="partner__image-message"
                  alt=""
                  loading="eager"
                  aria-hidden="true"
                />
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
