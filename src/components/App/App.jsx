import Bookings from "@/components/Bookings/Bookings.jsx";

import AppHeader from "@/components/AppHeader/AppHeader.jsx"
import Card from "../Card/Card";
import Deck from "../Deck/Deck";

const App = () => (
  <div className="app">

    <header className="app__header">
      <h1 className="app__heading">CYF Hotel</h1>
    </header>
    <Deck />

   <AppHeader/>

    <Bookings />

import AppHeader from "@/components/AppHeader/AppHeader.jsx"; // Resolved conflict
import Footer from "@/components/Footer/Footer.jsx"; // Resolved conflict
import Card from "../Card/Card"; // Resolved conflict
import { useState } from "react";

const arr = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789",
];

const App = () => (
  <div className="app">
    <AppHeader/> {/* Resolved conflict */}
    <Bookings />
    <Footer array={arr} /> {/* Resolved conflict */}
    <Card /> {/* Resolved conflict */}

  </div>
);

export default App;
