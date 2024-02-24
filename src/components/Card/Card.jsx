import "./Card.scss";

const Card = ({ title, url, image }) => {
  return (
    <>
      <h2>{title}</h2>
      <a href={url}>
        <img src={image} />
      </a>
    </>
  );
};

export default Card;
