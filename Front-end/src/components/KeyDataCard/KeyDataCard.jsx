import "./KeyDataCard.css";
import PropTypes from "prop-types";

/**
 * Render of card which private user details
 * @param {String} nameKeyData Name of icon.png
 * @param {Number} count data Back-end Api  request by apiServices.js (Score %)
 * @param {String} unity g/kcal...
 * @param {String} type category of nutrients
 * @returns {JSX} Return of required JSX
 */

const KeyDataCard = (props) => {
  return (
    <div className="keyData__card card">
      <div className="card__image">
        <img
          src={`../img/${props.nameKeyData}_icon.png`}
          alt={`"${props.nameKeyData}"`}
          className="keyData__icon"
        />
      </div>
      <div className="card__details details">
        <span className="details__count">
          {props.count} {props.unity}
        </span>
        <span className="details__type">{props.type}</span>
      </div>
    </div>
  );
};

KeyDataCard.propTypes = {
  nameKeyData: PropTypes.string,
  count: PropTypes.number,
  unity: PropTypes.string,
  type: PropTypes.string,
};
export default KeyDataCard;
