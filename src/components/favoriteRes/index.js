import React from "react";
import { useSelector } from "react-redux";
import { restaurantsSelector } from "../../redux/slices/restaurants";
import { favoriteIDSelector } from "../../redux/slices/favorites";
import CardFav from "./CardFav";
import "../mainPage/main.css";

function FavoriteRes() {
  const { restaurants, loading, hasError } = useSelector(restaurantsSelector);
  const { favoriteID } = useSelector(favoriteIDSelector);

  return (
    <div className="container-fluid mt-5">
      {loading == true ? (
        <div>
          <p>Loading Restaurants...</p>
        </div>
      ) : hasError == true ? (
        <div>
          <p>Cannot display Restaurants...</p>
        </div>
      ) : (
        <div className="row d-flex justify-content-center ">
          {restaurants
            .filter((restaurant) => {
              if (favoriteID.length < 1) {
                return;
              } else {
                for (let i = 0; i < favoriteID.length; i++) {
                  if (favoriteID[i] == restaurant.id) {
                    return restaurant;
                  }
                }
              }
            })
            .map((restaurant) => (
              <CardFav restaurant={restaurant} />
            ))}
        </div>
      )}
    </div>
  );
}

export default FavoriteRes;
