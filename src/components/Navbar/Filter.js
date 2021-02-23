import React, { useState, useEffect } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { useDispatch } from "react-redux";
import { getSelected } from "../../slices/checkboxes";

function Filter() {
  const [expanded, setExpanded] = React.useState(false);

  const [state, setState] = React.useState({
    checkedP3: false,
    checkedP2: false,
    checkedP1: false,
    checkedR5: false,
    checkedR4: false,
    checkedR3: false,
  });

  const dispatch = useDispatch();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChange2 = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    dispatch(getSelected(state));
  }, [state]);

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} className="accord">
          <Typography>Filter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion_filter">
            <div className="price_filter">
              <div>Price</div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedA}
                      onChange={handleChange2}
                      name="checkedP3"
                    />
                  }
                  label="$$$"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedA}
                      onChange={handleChange2}
                      name="checkedP2"
                    />
                  }
                  label="$$"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedA}
                      onChange={handleChange2}
                      name="checkedP1"
                    />
                  }
                  label="$"
                />
              </div>
            </div>
            <div className="rate_filter">
              <div>Rating</div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedA}
                      onChange={handleChange2}
                      name="checkedR5"
                    />
                  }
                  label="5 stars"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedA}
                      onChange={handleChange2}
                      name="checkedR4"
                    />
                  }
                  label="4 stars"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedA}
                      onChange={handleChange2}
                      name="checkedR3"
                    />
                  }
                  label="3 stars"
                />
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Filter;
