import React, { useState } from "react";
import Order from "../Order/Order";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  const handleAddOrder = () => {
    setOrders(orders + 1);
  };

  return (
    <section className="restaurant">
      <h3 className="restaurant__heading">Restaurant Orders</h3>
      <ul className="restaurant__list">
        <Order orders={orders} handleAddOrder={handleAddOrder} />
      </ul>
    </section>
  );
};

export default Restaurant;
