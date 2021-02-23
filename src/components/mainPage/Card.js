import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchInfo } from "../../redux/slices/details";
import { addID, favoriteIDSelector } from "../../redux/slices/favorites";
import DetailsPopup from "../DetailsPopup";

import "./main.css";
import GradeIcon from "@material-ui/icons/Grade";
import Button from "@material-ui/core/Button";

function Card(props) {
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

  // add movies id to favorite page
  const addToFavorite = (id) => {
    if (favoriteID.length > 0) {
      for (let i = 0; i < favoriteID.length; i++) {
        if (favoriteID[i] == id) {
          return;
        }
      }
      dispatch(addID(id));
    } else {
      dispatch(addID(id));
    }
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
              id="save"
              onClick={() => {
                addToFavorite(props.restaurant.id);
              }}
            >
              Save
            </Button>
            <Button
              variant="contained"
              color="default"
              id="more"
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

export default Card;
