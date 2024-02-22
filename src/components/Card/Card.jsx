import "./Card.scss";

const Card = ({ title, url, image }) => {
  return (
    <a href={url} className="card">
      <p className="card__title">{title}</p>
      <img src={image} className="card__image"></img>
    </a>
  );
};

export default Card;
