import React from "react";
import Footer from "@/components/Footer/Footer";
import Bookings from "@/components/Bookings/Bookings.jsx";
import "./App.scss";

const App = () => {
  const addresses = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789",
  ];

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__heading">CYF Hotel</h1>
      </header>
      <Bookings />
      <Footer addresses={addresses} />
    </div>
  );
};

export default App;
