import "./Card.scss";

const Card = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <a href={props.url}>
        <img src={props.src} alt="City Image"/>
      </a>
    </div>
  );
};

export default Card;
