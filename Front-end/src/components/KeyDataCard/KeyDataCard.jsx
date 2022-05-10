import "./KeyDataCard.css";

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

export default KeyDataCard;
