import RestaurantButton from "../RestaurantButton/RestaurantButton";
import React, { useState } from "react";

export default function Order({ orderType }) {
  const [orders, setOrders] = useState(0);
  const handleAddOrder = () => {
    setOrders(orders + 1);
  };

  return (
    <li className="restaurant__item">
      {orderType}: {orders}
      <RestaurantButton handleAddOrder={handleAddOrder} />
    </li>
  );
}
