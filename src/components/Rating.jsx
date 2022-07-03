import { NavItem } from "react-bootstrap";

export default function Rating(props) {
  const { Rating, ReviewNum } = props;
  return (
    <div className="rating">
      <span>
        <i
          className={
            Rating >= 1
              ? "fas fa-star"
              : Rating >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            Rating >= 2
              ? "fas fa-star"
              : Rating >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            Rating >= 3
              ? "fas fa-star"
              : Rating >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            Rating >= 4
              ? "fas fa-star"
              : Rating >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            Rating >= 5
              ? "fas fa-star"
              : Rating >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span> &nbsp;{ReviewNum} reviews</span>
    </div>
  );
}
