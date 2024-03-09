export default function RestaurantButton({ handleAddOrder }) {
  return (
    <button data-testid="addButton" className="button restaurant__button" onClick={handleAddOrder}>
      Add
    </button>
  );
}
