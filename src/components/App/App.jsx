import Bookings from "@/components/Bookings/Bookings.jsx";
import AppHeader from "@/components/AppHeader/AppHeader.jsx"
import "./App.scss";
import Card from "../Card/Card";

const App = () => (
  <div className="app">
   <AppHeader/>
    <Bookings />
    <Card />
  </div>
);

export default App;
