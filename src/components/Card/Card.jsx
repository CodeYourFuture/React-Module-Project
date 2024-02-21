import "./Card.scss";

const Card = ({ title, anchorTag, image }) => {
  return (
    <>
      <a
        href={anchorTag}
        style={{
          backgroundColor: "red",
        }}
        className="card"
      >
        <p style={{ backgroundColor: "green" }} className="card__title">
          {title}
        </p>
        <img src={image} className="card__image" alt="picture" />
      </a>
    </>
  );
};

export default Card;
