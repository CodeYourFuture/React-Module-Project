import { useState } from "react";
import RestaurantButton from "../RestaurantButton";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);

  

  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <section className="restaurant">
      <h3 className="restaurant__heading">Restaurant Orders</h3>
      <ul className="restaurant__list">
        <li className="restaurant__item">
          Pizzas: {orders}{" "}
          <button onClick={orderOne} className="button restaurant__button">
            Add
          </button>
          <RestaurantButton />
        </li>
      </ul>
    </section>
  );
};

export default Restaurant;
