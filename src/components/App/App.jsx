import Bookings from "@/components/Bookings/Bookings.jsx";
import "./App.scss";
import AppHeader from "../AppHeader/AppHeader";

const App = () => (
  <div className="app">
    <AppHeader/>
    <Bookings />
  </div>
);

export default App;
