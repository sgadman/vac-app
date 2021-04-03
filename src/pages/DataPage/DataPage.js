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

  return (
    <DataView
      prevCountry={location.state.selectedCountry}
      prevState={location.state.selectedState}
      getVacData={getVacData}
      countryStateData={countryStateData}
      handleEditClicked={handleEditClicked}
    />
  );
};

export default DataPage;
