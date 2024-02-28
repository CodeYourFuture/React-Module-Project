import { useState } from "react";
import RestaurantButton from "../RestaurantButton";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);

  
  return (
    <section className="restaurant">
      <h3 className="restaurant__heading">Restaurant Orders</h3>
      <ul className="restaurant__list">
        <li className="restaurant__item">
          Pizzas: {orders}{" "}
          <RestaurantButton />
        </li>
      </ul>
    </section>
  );
};

export default Restaurant;
