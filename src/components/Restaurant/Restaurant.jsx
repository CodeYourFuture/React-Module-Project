
import Order from "../Order/Order";

const Restaurant = () => {

import { useState } from "react";
import "./Restaurant.scss";

const Restaurant = () => {
  const [order, setOrder] = useState(0);

  return (
    <section className="restaurant">
      <h3 className="restaurant__heading">Restaurant Orders</h3>
      <ul className="restaurant__list">

       <Order orderType="Pizzas" />
        <Order orderType="Salad" />
        <Order orderType="Chocolate cake" />
       </ul>

        <li data-testid="orders" className="restaurant__item">
          Pizzas: {order}{" "}
          <button
            className="button restaurant__button"
            // onClick={() => setOrder(order + 1)}
          >
            Add
          </button>
        </li>
      </ul>

    </section>
  );
};

export default Restaurant;
