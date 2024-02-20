import Bookings from "@/components/Bookings/Bookings.jsx";
import AppHeader from "../AppHeader/AppHeader.jsx";
import Card from "../Card/Card.jsx";

import "./App.scss";

const App = () => (
  <div>
    <AppHeader />
    <Bookings />
    <Card title="this is card component" />
  </div>
);

export default App;
