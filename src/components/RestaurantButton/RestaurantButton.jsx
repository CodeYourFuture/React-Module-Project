import React from "react";

const RestaurantButton = ({orderOnehandleAddPizza}) => {
    return (
        <>
            <button
                className="button restaurant__button"
                onClick={orderOnehandleAddPizza}>Add
            </button>
        </>
    )
}

export default RestaurantButton;