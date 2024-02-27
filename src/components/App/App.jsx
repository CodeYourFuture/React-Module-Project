import Bookings from "@/components/Bookings/Bookings.jsx";
import AppHeader from "@/components/AppHeader/AppHeader.jsx"
import Card from "../Card/Card";
import Deck from "../Deck/Deck";

const App = () => (
  <div className="app">

    <header className="app__header">
      <h1 className="app__heading">CYF Hotel</h1>
    </header>
    <Deck />

   <AppHeader/>

    <Bookings />
  </div>
);

export default App;
