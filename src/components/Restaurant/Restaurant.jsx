import React, { useState } from "react";
import "./Restaurant.scss";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);

  const handleAddPizza = () => {
    setOrders(orders + 1);
  };

  return (
    <section className="restaurant">
      <h3 className="restaurant__heading">Restaurant Orders</h3>
      <ul className="restaurant__list">
        <li className="restaurant__item">
          Pizzas: {orders}{" "}
          <button
            className="button restaurant__button"
            onClick={handleAddPizza}
          >
            Add
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Restaurant;
