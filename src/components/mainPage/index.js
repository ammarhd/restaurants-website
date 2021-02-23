import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchRestaurants,
  restaurantsSelector,
} from "../../redux/slices/restaurants";
import { filtersSelector } from "../../redux/slices/filters";
import { checkboxesSelector } from "../../redux/slices/checkboxes";
import { sortRestaurants } from "./sortHelper";
import {
  getUnique,
  filterProperty,
  filterList,
  filterListRate,
} from "./filterHelper";

import "./main.css";
import Navbar from "../Navbar";
import Card from "./Card";

var checkboxFilters = [];

function Resturants() {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const { restaurants, loading, hasError } = useSelector(restaurantsSelector);
  const { inputChange, sort_filter } = useSelector(filtersSelector);
  const { checked } = useSelector(checkboxesSelector);

  // dispatch thunk when component first mounts
  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  useEffect(() => {
    setData(restaurants);
  }, [restaurants]);

  // function to sort the resturants
  useEffect(() => {
    var sorted = [];

    if (sort_filter.value != "") {
      sorted = sortRestaurants(sort_filter.value, data);
      setData(sorted);
    } else {
      setData(restaurants);
    }
  }, [sort_filter]);

  ///////// checkbox filters
  useEffect(() => {
    checkboxFilters = [];

    if (
      checked.checkedP1 ||
      checked.checkedP2 ||
      checked.checkedP3 ||
      checked.checkedR3 ||
      checked.checkedR4 ||
      checked.checkedR5
    ) {
      console.log(true);
      if (checked.checkedP1) {
        let hasProperty = [];
        let filtered = [];
        hasProperty = filterProperty(restaurants, "price_level");
        filtered = filterList(hasProperty, 1, 2);
        checkboxFilters = checkboxFilters.concat(filtered);
        checkboxFilters = getUnique(checkboxFilters);
        console.log(checkboxFilters);
      }
      if (checked.checkedP2) {
        let hasProperty = [];
        let filtered = [];
        hasProperty = filterProperty(restaurants, "price_level");
        filtered = filterList(hasProperty, 2, 3);
        checkboxFilters = checkboxFilters.concat(filtered);
        checkboxFilters = getUnique(checkboxFilters);
        console.log(checkboxFilters);
      }
      if (checked.checkedP3) {
        let hasProperty = [];
        let filtered = [];
        hasProperty = filterProperty(restaurants, "price_level");
        filtered = filterList(hasProperty, 3, 4);
        checkboxFilters = checkboxFilters.concat(filtered);
        checkboxFilters = getUnique(checkboxFilters);
      }
      if (checked.checkedR3) {
        let hasProperty = [];
        let filtered = [];
        hasProperty = filterProperty(restaurants, "rating");
        filtered = filterListRate(hasProperty, 3, 4);
        checkboxFilters = checkboxFilters.concat(filtered);
        checkboxFilters = getUnique(checkboxFilters);
      }
      if (checked.checkedR4) {
        let hasProperty = [];
        let filtered = [];
        hasProperty = filterProperty(restaurants, "rating");
        filtered = filterListRate(hasProperty, 4, 5);
        checkboxFilters = checkboxFilters.concat(filtered);
        checkboxFilters = getUnique(checkboxFilters);
      }
      if (checked.checkedR5) {
        let hasProperty = [];
        let filtered = [];
        hasProperty = filterProperty(restaurants, "rating");
        filtered = filterListRate(hasProperty, 5, 6);
        checkboxFilters = checkboxFilters.concat(filtered);
        checkboxFilters = getUnique(checkboxFilters);
      }

      setData(checkboxFilters);
    } else {
      setData(restaurants);
    }
  }, [checked]);

  return (
    <div>
      <div>
        <Navbar />
      </div>
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
            {data
              .filter((resturant) => {
                if (inputChange == "") {
                  return resturant;
                } else if (
                  resturant.name
                    .toLowerCase()
                    .includes(inputChange.toLowerCase())
                ) {
                  return resturant;
                }
              })
              .map((restaurant) => (
                <Card restaurant={restaurant} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Resturants;
