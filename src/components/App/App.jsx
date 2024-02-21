import Bookings from "@/components/Bookings/Bookings.jsx";
import AppHeader from "../AppHeader/AppHeader.jsx";
import Card from "../Card/Card.jsx";
import Deck from "../Deck/Deck.jsx";

import "./App.scss";

const App = () => (
  <div>
    <AppHeader />
    <Deck />
    <Bookings />
    <Card title="This is card component" />
  </div>
);

export default App;
