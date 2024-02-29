import React from "react";
import Card from "@/components/Card/Card";
import "./Deck.scss";
import cardsData from "@/data/fakeCards.json";

const Deck = () => {
    return <div className="deck">
        {cardsData.map((card) => (
            <Card key={card.id} title={card.title} link={card.url} image={card.image} />
        ))}
    </div>
};

export default Deck;
// you will need to map over the cardsData array and render a Card component for each card object
// how will you pass props to the Card component?