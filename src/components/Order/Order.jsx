import { useState } from "react";
import RestaurantButton from "../RestaurantButton/RestaurantButton";

function Order({orderType}) {
  const [pizzas, setPizzas] = useState(0);

  const OrderOne = () => {
    setPizzas(pizzas + 1);
  };
  return (
    <>
      <li className="restaurant__item">{orderType}: {pizzas} </li>
      <RestaurantButton OrderOne={OrderOne} />
    </>
  );
}

export default Order