import "./Card.scss";

const Card = ({ title, url, image }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "red",
        }}
        className="card-component"
      >
        <h1 style={{ backgroundColor: "green" }}>{title}</h1>
        <a src={url}></a>
        <img src={image} alt="picture" />
      </div>
    </>
  );
};

export default Card;
