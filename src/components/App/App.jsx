import Bookings from "@/components/Bookings/Bookings.jsx";
import "./App.scss";
import AppHeader from "../AppHeader/AppHeader.jsx";
import Footer from "../Footer/Footer";
import Deck from "../Deck/Deck";
import Restaurant from "../Restaurant/Restaurant.jsx";

const App = () => (
  <div className="app">
    <AppHeader/>
    <Deck/>
    <Bookings />
    <Restaurant />
    <Footer />
  </div>
);

export default App;
