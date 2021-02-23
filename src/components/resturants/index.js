import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchRestaurants,
  restaurantsSelector,
} from "../../slices/restaurants";

function Resturants() {
  const dispatch = useDispatch();
  const { restaurants, loading, hasError } = useSelector(restaurantsSelector);

  // dispatch thunk when component first mounts
  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  // error handling & map successful quary data
  const renderRestaurants = () => {
    if (loading) return <p>Loading Restaurants...</p>;
    if (hasError) return <p>Cannot display Restaurants...</p>;

    return restaurants.map((restaurant) => (
      <div key={restaurant.id} className="title">
        <h2>{restaurant.name}</h2>
        <img src={restaurant.photo} alt="" />
      </div>
    ));
  };

  //console.log("restaurants : ", restaurants);
  return (
    <div>
      <div>{renderRestaurants()}</div>
    </div>
  );
}

export default Resturants;
