import Bookings from "@/components/Bookings/Bookings.jsx";
import Footer from "@/components/Footer/Footer";
import "./App.scss";
import AppHeader from "../AppHeader/AppHeader.jsx";
import Restaurant from "@/components/Restaurant/Restaurant.jsx";

const App = () => (
  <div>
    <AppHeader />
    <Bookings />
    <Restaurant />
    <Footer />
  </div>
);

export default App;
