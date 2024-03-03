import "./Card.scss";

const Card = ({ title, url, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h2>{title}</h2>
        <a href={url}>Visit website</a>
      </div>
    </div>
  );
};

export default Card;
