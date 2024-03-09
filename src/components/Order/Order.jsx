import RestaurantButton from "../RestaurantButton/RestaurantButton";
import React, { useState } from "react";

export default function Order() {
  const [orders, setOrders] = useState(0);
  const handleAddOrder = () => {
    setOrders(orders + 1);
  };

  return (
    <li className="restaurant__item">
      Orders: {orders}
      <RestaurantButton handleAddOrder={handleAddOrder} />
    </li>
  );
}
