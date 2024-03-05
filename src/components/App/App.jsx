import Bookings from "@/components/Bookings/Bookings.jsx";
import "./App.scss";
import AppHeader from "../AppHeader/AppHeader.jsx";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Restaurant from "../Restaurant/Restaurant.jsx";

const App = () => (
  <div className="app">
    <AppHeader />
    <Card title="Welcome to CYF Hotel" url="https://cyf-hotel.com" image="https://cyf-hotel.com/images/banner.jpg" />
    <Bookings />
    <Restaurant />
    <Footer />
  </div>
);

export default App;
