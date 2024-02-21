import Card from "@/components/Card/Card";
import "./Deck.scss";
import cardsData from "@/data/fakeCards.json";

const Deck = () => {
  return (
    <>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          anchorTag={card.url}
          image={card.image}
        />
      ))}
    </>
  );
  // you will need to map over the cardsData array and render a Card component for each card object
  // how will you pass props to the Card component?
};

export default Deck;
