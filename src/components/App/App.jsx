import Bookings from "@/components/Bookings/Bookings.jsx";
import Footer from "@/components/Footer/Footer";
import "./App.scss";

const App = () => (
  <div className="app">
    <header className="app__header">
      <h1 className="app__heading">CYF Hotel</h1>
    </header>
    <Bookings />
    <Footer
      list={[
        "123 Fake Street, London, E1 4UD",
        "hello@fakehotel.com",
        "0123 456789",
      ]}
    />
  </div>
);

export default App;
