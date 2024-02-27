import Bookings from "@/components/Bookings/Bookings.jsx";
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
