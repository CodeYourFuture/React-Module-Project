export default function RestaurantButton({ handleAddOrder }) {
  return (
    <button className="button restaurant__button" onClick={handleAddOrder}>
      Add
    </button>
  );
}
