import Bookings from "@/components/Bookings/Bookings.jsx";
import AppHeader from "@/components/AppHeader/AppHeader.jsx"
import "./App.scss";

const App = () => (
  <div className="app">
   <AppHeader/>
    <Bookings />
  </div>
);

export default App;
