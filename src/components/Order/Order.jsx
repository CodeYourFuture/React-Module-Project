import RestaurantButton from "../RestaurantButton/RestaurantButton";

export default function Order({ orders, handleAddOrder }) {
  return (
    <li className="restaurant__item">
      Orders: {orders}
      <RestaurantButton handleAddOrder={handleAddOrder} />
    </li>
  );
}
