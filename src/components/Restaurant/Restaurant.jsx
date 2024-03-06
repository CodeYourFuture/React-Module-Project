import { useState } from "react";

function Restaurant() {
  const [pizzas, setPizzas] = useState(0);

  const OrderOne = () => {
    setPizzas(pizzas + 1);
  }

  return (
    <section className="restaurant">
      <h3 className="restaurant__heading">Restaurant Orders</h3>
      <ul className="restaurant__list">
        <li className="restaurant__item">
          Pizzas: {pizzas}{" "}
        </li>
      </ul>
    </section>
  );
}

export default Restaurant;
