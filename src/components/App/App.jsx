import Bookings from "@/components/Bookings/Bookings.jsx";
import AppHeader from "../AppHeader/AppHeader.jsx";
import Deck from "../Deck/Deck.jsx";
import Footer from "../footer/Footer.jsx";

import "./App.scss";

const App = () => (
  <div>
    <AppHeader />
    <Deck />
    <Bookings />
    <Footer />
  </div>
);
export default App;
