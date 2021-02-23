import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { restaurantsSelector } from "../../redux/slices/restaurants";
import { removeID, favoriteIDSelector } from "../../redux/slices/favorites";
import { fetchInfo } from "../../redux/slices/details";
import "../mainPage/main.css";

import DetailsPopup from "../DetailsPopup";

import GradeIcon from "@material-ui/icons/Grade";
import Button from "@material-ui/core/Button";

function CardFav(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [theId, setTheId] = useState();
  const { favoriteID } = useSelector(favoriteIDSelector);
  const dispatch = useDispatch();

  const togglePopup = (id) => {
    if (isOpen && id != theId) {
      setIsOpen(true);
      setTheId(id);
    } else {
      setIsOpen(!isOpen);
      setTheId(id);
    }
    dispatch(fetchInfo(id));
    console.log(id);
  };

  const togglePopup2 = () => {
    setIsOpen(false);
  };

  ///// info
  useEffect(() => {
    dispatch(fetchInfo(theId));
  }, [theId]);

  // remove restaurants from favorites list
  const removeFromFavorite = (id) => {
    dispatch(removeID(id));
  };

  return (
    <div
      key={props.restaurant.id}
      className=" boxR d-flex justify-content-start m-3"
    >
      <div className="restaurantPic">
        <img
          src={props.restaurant.photo}
          onError={(e) => {
            e.target.onError = null;
            e.target.src =
              "https://digitalsynopsis.com/wp-content/uploads/2017/02/beautiful-color-gradients-backgrounds-010-winter-neva.png";
          }}
          alt=""
          className="restaurantPic2"
        />
        <div className="overlay d-flex align-items-center justify-content-center ">
          <div className="buttons_over">
            <Button
              variant="contained"
              color="secondary"
              id="unsave"
              onClick={() => {
                removeFromFavorite(props.restaurant.id);
              }}
            >
              Unsave
            </Button>
            <Button
              variant="contained"
              color="default"
              id="view"
              onClick={() => {
                togglePopup(props.restaurant.id);
              }}
            >
              view
            </Button>
          </div>
        </div>
      </div>
      {isOpen && props.restaurant.id == theId && (
        <DetailsPopup closePopup={togglePopup2} id={theId} />
      )}

      <div className="restaurantInfo">
        <div className="restauranLeft">
          <div className="restaurantTitle">{props.restaurant.name}</div>
          <div className="readMore"></div>
        </div>

        <div className="restaurantRigth">
          {props.restaurant.price_level >= 3 ? (
            <div className="rRest">
              <GradeIcon fontSize="small" color="secondary" />
              {props.restaurant.rating} | $$$
            </div>
          ) : props.restaurant.price_level == 2 ? (
            <div className="rRest">
              <GradeIcon fontSize="small" color="secondary" />
              {props.restaurant.rating} | $$
            </div>
          ) : props.restaurant.price_level == 1 ? (
            <div className="rRest">
              <GradeIcon fontSize="small" color="secondary" />
              {props.restaurant.rating} | $
            </div>
          ) : (
            <div className="rRest">
              <GradeIcon fontSize="small" color="secondary" />
              {props.restaurant.rating}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardFav;
