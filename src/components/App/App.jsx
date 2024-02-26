import Bookings from "@/components/Bookings/Bookings.jsx";
import Footer from "@/components/Footer/Footer";
import "./App.scss";
import AppHeader from "../AppHeader/AppHeader.jsx";

const App = () => (
  <div>
    <AppHeader />
    <Bookings />
    <Footer />
  </div>
);

export default App;
