import Bookings from "@/components/Bookings/Bookings.jsx";
import "./App.scss";
import Footer from "../Footer/Footer";

const App = () => (
  <div className="app">
    <header className="app__header">
      <h1 className="app__heading">CYF Hotel</h1>
    </header>
    <Bookings />
    <Footer />
  </div>
);

export default App;
