import Bookings from "@/components/Bookings/Bookings.jsx";
import "./App.scss";
import Footer from "@/components/Footer/Footer.jsx";
import { useState } from "react";

const arr = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789",
];


const App = () => (
  <div className="app">
    <header className="app__header">
      <h1 className="app__heading">CYF Hotel</h1>
    </header>
    <Bookings />
    <Footer array={arr} />
  </div>
);

export default App;
