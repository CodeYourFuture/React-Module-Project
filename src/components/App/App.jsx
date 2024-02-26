import Bookings from "@/components/Bookings/Bookings.jsx";
import "./App.scss";
import Deck from "../Deck/Deck";
const App = () => (
  <div className="app">
    <header className="app__header">
      <h1 className="app__heading">CYF Hotel</h1>
    </header>
    <Bookings />
    <Deck />
  </div>
);

export default App;
