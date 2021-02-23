import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import FastfoodIcon from "@material-ui/icons/Fastfood";

function Header() {
  const [mainButton, setMainButton] = useState("secondary");
  const [favButton, setFavButton] = useState("default");

  const mainClicked = () => {
    setMainButton((prevColor) => "secondary");
    setFavButton((prevColor) => "default");
  };
  const favClicked = () => {
    setFavButton((prevColor) => "secondary");
    setMainButton((prevColor) => "default");
  };
  return (
    <div className="header">
      <div className="title">
        <h1>TASTY</h1> <FastfoodIcon />
      </div>
      <div className="toggle-buttons">
        <span>
          <Link to="/" className="a">
            <Button
              variant="contained"
              color={mainButton}
              onClick={mainClicked}
              id="main_tog"
            >
              Main
            </Button>
          </Link>
        </span>
        <span>
          <Link to="/FavoriteRes" className="a">
            <Button
              variant="contained"
              color={favButton}
              onClick={favClicked}
              id="fav_tog"
            >
              Favorite
            </Button>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Header;
