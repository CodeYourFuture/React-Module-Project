import Bookings from "@/components/Bookings/Bookings.jsx";
import AppHeader from "@/components/AppHeader/AppHeader.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import Deck from "../Deck/Deck";
import Restaurant from "../Restaurant/Restaurant.jsx";
import "./App.scss"

const arr = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789",
];

const App = () => (
  <div className="app">
    <AppHeader />
    <Deck />
    <Bookings />
    <Restaurant />
    <Footer array={arr} />
  </div>
);

export default App;
