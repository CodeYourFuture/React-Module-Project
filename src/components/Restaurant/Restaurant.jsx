import { useState } from "react";
import RestaurantButton from "../RestaurantButton/RestaurantButton";

function Restaurant() {
  const [pizzas, setPizzas] = useState(0);

  const OrderOne = () => {
    setPizzas(pizzas + 1);
  };

  return (
    <section className="restaurant">
      <h3 className="restaurant__heading">Restaurant Orders</h3>
      <ul className="restaurant__list">
        <li className="restaurant__item">Pizzas: {pizzas} </li>
      </ul>
      <RestaurantButton OrderOne={OrderOne} />
    </section>
  );
}

export default Restaurant;
