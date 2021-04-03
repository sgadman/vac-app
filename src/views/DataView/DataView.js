import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import CountryAndStatePicker from "../../components/CountryAndStatePicker";
import VacTableChart from "../../components/VacTableChart";

const DataView = ({ countryStateData, getVacData, handleEditClicked }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [vacData, setVacData] = useState(null);

  useEffect(() => {
    if (selectedState !== "") {
      setVacData(getVacData(selectedCountry, selectedState));
    } else {
      setVacData(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getVacData, selectedState]);

  return (
    <div>
      <CountryAndStatePicker
        setSelectedCountry={setSelectedCountry}
        countryStateData={countryStateData}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
        selectedCountry={selectedCountry}
      />
      {vacData && (
        <VacTableChart
          handleEditClicked={handleEditClicked}
          vacData={vacData}
        />
      )}
    </div>
  );
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
};

export default DataView;
