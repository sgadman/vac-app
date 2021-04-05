import React, { useEffect, useState } from "react";

import { useLocation, useNavigate } from "@reach/router";

import getCountries from "../../apis/getCountries";
import getVacData from "../../apis/getVacData";

import DataView from "../../views/DataView";

const DataPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [countryStateData, setCountryStateData] = useState([]);

  useEffect(() => {
    getCountries().then((data) => setCountryStateData(data));
  }, []);

  const handleEditClicked = (data) => {
    navigate("/edit", { state: data }).then(() =>
      console.log("move to edit page")
    );
  };

  const prevCountry = location.state && location.state.selectedCountry;
  const prevState = location.state && location.state.selectedState;

  return (
    <DataView
      prevCountry={prevCountry}
      prevState={prevState}
      getVacData={getVacData}
      countryStateData={countryStateData}
      handleEditClicked={handleEditClicked}
    />
  );
};

export default DataPage;
