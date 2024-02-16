import Bookings from "@/components/Bookings/Bookings.jsx";
import AppHeader from "../AppHeader/AppHeader.jsx";
import SpaLog from "@/assets/spa-logo.png";
import HotelLogo from "@/assets/hotel-logo.png";
import "./App.scss";

const App = () => (
  <div className="app">
    <img
      style={{
        width: "100px",
        height: "100px",
      }}
      src={HotelLogo}
      alt="hotel logo"
    />
    <AppHeader />
    <Bookings />
    <img src={SpaLog} alt="hotel background picture" />
  </div>
);

export default App;
