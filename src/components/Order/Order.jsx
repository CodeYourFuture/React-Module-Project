import { useState } from "react";
import RestaurantButton from "../RestaurantButton/RestaurantButton";

function Order() {
  const [pizzas, setPizzas] = useState(0);

  const OrderOne = () => {
    setPizzas(pizzas + 1);
  };
  return (
    <>
      <li className="restaurant__item">Pizzas: {pizzas} </li>
      <RestaurantButton OrderOne={OrderOne} />
    </>
  );
}

export default Order