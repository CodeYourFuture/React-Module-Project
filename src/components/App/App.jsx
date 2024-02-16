import Bookings from "@/components/Bookings/Bookings.jsx";
import "./App.scss";
import Card from "../Card/Card";

const App = () => (
  <div className="app">
    <header className="app__header">
      <h1 className="app__heading">CYF Hotel</h1>
    </header>
    <Bookings />
    <Card />
  </div>
);

export default App;
