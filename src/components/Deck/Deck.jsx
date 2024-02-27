import Card from "@/components/Card/Card";
import "./Deck.scss";
import cardsData from "@/data/fakeCards.json";

const Deck = () => {
  // Map over the cardsData array and render a Card component for each card object
  const data = cardsData.map((card) => (
    <Card
      title={card.title}
      url={card.url}
      src={card.image}
      key={crypto.randomUUID()}
    />
  ));

  return <>{data}</>;
};

export default Deck;
