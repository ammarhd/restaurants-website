import React from "react";
import "./popup.css";
import Button from "@material-ui/core/Button";

import { useSelector } from "react-redux";
import { infoSelector } from "../../slices/details";

import IconButton from "@material-ui/core/IconButton";
import DirectionsIcon from "@material-ui/icons/Directions";
import ExploreIcon from "@material-ui/icons/Explore";
import PhoneIcon from "@material-ui/icons/Phone";
import StarRateIcon from "@material-ui/icons/StarRate";
import PlaceIcon from "@material-ui/icons/Place";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

function DetailsPopup(props) {
  const { info, loading, hasError } = useSelector(infoSelector);

  return (
    <div className="popup-menu">
      <div className="popup">
        {loading == true ? (
          <div>
            <p>Loading Restaurants...</p>
          </div>
        ) : hasError == true ? (
          <div>
            <p>Cannot display Restaurants...</p>
          </div>
        ) : (
          <div className="allInfo">
            {info.name ? <div className="name">{info.name}</div> : <div></div>}
            {info.rating && info.price_level && info.price_level >= 3 ? (
              <div className="rating">
                <StarRateIcon />
                {info.rating} | $$$
              </div>
            ) : info.rating && info.price_level && info.price_level >= 2 ? (
              <div className="rating">
                <StarRateIcon />
                {info.rating} | $$
              </div>
            ) : info.rating && info.price_level && info.price_level >= 1 ? (
              <div className="rating">
                <StarRateIcon />
                {info.rating} | $
              </div>
            ) : info.rating ? (
              <div className="rating">
                <StarRateIcon />
                {info.rating}
              </div>
            ) : (
              <div></div>
            )}
            <div className="urll">
              {info.website ? (
                <div className="urll1">
                  Website
                  <IconButton src={info.website} color="secondary">
                    <ExploreIcon />
                  </IconButton>
                </div>
              ) : (
                <div></div>
              )}
              {info.google_maps_url ? (
                <div className="">
                  Direction
                  <IconButton src={info.google_maps_url} color="secondary">
                    <DirectionsIcon />
                  </IconButton>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            {info.phone_number ? (
              <div className="aa">
                <div className="bb">
                  <PhoneIcon />
                </div>
                <div>{info.phone_number}</div>
              </div>
            ) : (
              <div></div>
            )}
            {info.address ? (
              <div className="aa">
                <div className="bb">
                  <PlaceIcon />
                </div>
                <div>{info.address}</div>
              </div>
            ) : (
              <div></div>
            )}

            {info.opening_hours ? (
              <div className="aaa">
                <div className="bb">
                  <AccessTimeIcon />
                </div>
                <div>
                  {info.opening_hours.map((hour) => (
                    <div>{hour}</div>
                  ))}
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        )}

        <div className="buttons">
          <Button
            variant="contained"
            color="default"
            onClick={props.closePopup}
            id="close"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DetailsPopup;
