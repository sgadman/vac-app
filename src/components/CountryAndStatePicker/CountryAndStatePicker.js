import React from "react";
import PropTypes from "prop-types";

import DropDown from "../DropDown";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  countryAndStatePicker: {
    paddingBottom: "10px",
    display: "flex",
    flexDirection: "row",
  },
}));

const CountryAndStatePicker = ({
  countryStateData,
  selectedCountry,
  selectedState,
  setSelectedCountry,
  setSelectedState,
}) => {
  const classes = useStyles();

  const countryData = countryStateData.map((data) => data.country);
  const stateData = countryStateData.find(
    (data) => data.country === selectedCountry
  ) || { states: [] };

  const handleCountrySelect = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState("");
  };

  const handleStateSelect = (e) => {
    setSelectedState(e.target.value);
  };

  return (
    <div className={classes.countryAndStatePicker}>
      <DropDown
        defaultOption="Select A Country"
        label="Country"
        onChange={handleCountrySelect}
        options={countryData}
        selectedValue={selectedCountry}
      />
      {stateData.states.length !== 0 && (
        <DropDown
          defaultOption="Select a State"
          label="States"
          onChange={handleStateSelect}
          options={stateData.states}
          selectedValue={selectedState}
        />
      )}
    </div>
  );
};

CountryAndStatePicker.propTypes = {
  countryStateData: PropTypes.arrayOf(
    PropTypes.exact({
      country: PropTypes.string,
      states: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  selectedCountry: PropTypes.string.isRequired,
  selectedState: PropTypes.string.isRequired,
  setSelectedCountry: PropTypes.func.isRequired,
  setSelectedState: PropTypes.func.isRequired,
};

export default CountryAndStatePicker;
