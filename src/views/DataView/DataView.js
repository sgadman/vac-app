import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core";

import CountryAndStatePicker from "../../components/CountryAndStatePicker";
import VacTableChart from "../../components/VacTableChart";

const useStyles = makeStyles(() => ({
  dataView: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const DataView = ({
  countryStateData,
  getVacData,
  handleEditClicked,
  prevCountry,
  prevState,
}) => {
  const classes = useStyles();

  const [selectedCountry, setSelectedCountry] = useState(prevCountry || "");
  const [selectedState, setSelectedState] = useState(prevState || "");
  const [vacData, setVacData] = useState(null);

  useEffect(() => {
    if (selectedState !== "") {
      getVacData(selectedCountry, selectedState).then((data) =>
        setVacData(data)
      );
    } else {
      setVacData(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getVacData, selectedState]);

  const onEditClicked = (data) => {
    handleEditClicked({ ...data, selectedCountry, selectedState });
  };

  return (
    <div className={classes.dataView}>
      {countryStateData.length !== 0 && (
        <CountryAndStatePicker
          setSelectedCountry={setSelectedCountry}
          countryStateData={countryStateData}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          selectedCountry={selectedCountry}
        />
      )}
      {vacData && (
        <VacTableChart handleEditClicked={onEditClicked} vacData={vacData} />
      )}
    </div>
  );
};

DataView.defaultProps = {
  prevCountry: "",
  prevState: "",
};

DataView.propTypes = {
  countryStateData: PropTypes.arrayOf(
    PropTypes.exact({
      country: PropTypes.string,
      states: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  getVacData: PropTypes.func.isRequired,
  handleEditClicked: PropTypes.func.isRequired,
  prevCountry: PropTypes.string,
  prevState: PropTypes.string,
};

export default DataView;
