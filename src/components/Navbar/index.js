import React, { useState, useEffect } from "react";
import "./navbar.css";
import Select from "react-select";
import Filter from "./Filter";
import { useSelector, useDispatch } from "react-redux";
import { getInput, getSort, filtersSelector } from "../../redux/slices/filters";

import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const sort_attributes = [
  { value: "1", label: "rating (high to low)" },
  { value: "2", label: "rating (low to high)" },
  { value: "3", label: "price (high to low)" },
  { value: "4", label: "price (low to high)" },
];

function Navbar() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { sort_filter } = useSelector(filtersSelector);

  const [attr, setAttr] = useState({ value: "", label: "" });

  dispatch(getSort(attr));
  return (
    <div className="navbar sticky-top navbar-dark bg-dark navbar-fixed-top">
      <div className="search_sort">
        <div className="filter">
          <Filter />
        </div>
        <div className="search">
          <div className="searchInput">
            <InputBase
              className={classes.input}
              placeholder="Search Restaurants"
              inputProps={{ "aria-label": "search google maps" }}
              onChange={(event) => {
                dispatch(getInput(event.target.value));
              }}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </div>
        </div>
        <div className="sort">
          <Select
            placeholder="Sort"
            defaultValue={sort_filter}
            onChange={setAttr}
            options={sort_attributes}
            isClearable
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
