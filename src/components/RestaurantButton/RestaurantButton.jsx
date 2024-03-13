
function RestaurantButton({ OrderOne }) {
  return (
    <>
      <button type="button" className="button restaurant__button" onClick={OrderOne}>
        Add Pizzas
      </button>
    </>
  );
}

export default RestaurantButton
