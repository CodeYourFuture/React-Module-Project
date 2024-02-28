import Card from "@/components/Card/Card";
import "./Deck.scss";
import cardsData from "@/data/fakeCards.json";

const Deck = () => {
  // Map over the cardsData array and render a Card component for each card object
  const data = cardsData.map((card,index) => (
    <Card
      title={card.title}
      url={card.url}
      src={card.image}
      key={index}
    />
  ));

  return <section className="deck">{data}</section>;
};

export default Deck;
