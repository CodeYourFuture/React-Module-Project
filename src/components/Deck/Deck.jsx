import Card from "@/components/Card/Card";
import "./Deck.scss";
import cardsData from "@/data/fakeCards.json";

const Deck = () => {
    return (
      <div className="deck">
        {cardsData.map((cardData, i) => (
          <Card title={cardData.title} url={cardData.url} image={cardData.image} key={i} />
        ))}
      </div>
    );
};

export default Deck;
