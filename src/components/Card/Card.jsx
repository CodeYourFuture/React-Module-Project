import "./Card.scss";

const Card = ({ title, anchorTag, image }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "red",
        }}
        className="card"
      >
        <p style={{ backgroundColor: "green" }} className="card__title">
          {title}
        </p>
        <a href={anchorTag}></a>
        <img src={image} className="card__image" alt="picture" />
      </div>
    </>
  );
};

export default Card;
