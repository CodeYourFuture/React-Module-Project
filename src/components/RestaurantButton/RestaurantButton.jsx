import React from "react";

const RestaurantButton = ({orderOne}) => {
    return (
        <>
            <button
                className="button restaurant__button"
                onClick={orderOne}>Add
            </button>
        </>
    )
}

export default RestaurantButton;