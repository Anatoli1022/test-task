import "./Reviews.scss";
import quotes from "@assets/reviews/quotes.svg";
const Reviews = () => {
  return (
    <div className="reviews">
      <div className="reviews__container container">
        <div>
          <img
            src={quotes}
            className="reviews__quote-image"
            alt=""
            loading="lazy"
            aria-hidden="true"
          />
          <blockquote className="reviews__blockquote">
            Quisque vulputate odio vitae imperdiet sodales
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
