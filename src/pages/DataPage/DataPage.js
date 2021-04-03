import React, { useEffect, useState } from "react";
import DataView from "../../views/DataView";
import getCountries from "../../apis/getCountries";
import getVacData from "../../apis/getVacData";
import { useNavigate } from "@reach/router";

const DataPage = () => {
  const navigate = useNavigate();

  const [countryStateData, setCountryStateData] = useState([]);

  useEffect(() => {
    getCountries().then((data) => setCountryStateData(data));
  }, []);

  const handleEditClicked = (data) => {
    navigate("/edit", { state: data });
  };

  return (
    <DataView
      getVacData={getVacData}
      countryStateData={countryStateData}
      handleEditClicked={handleEditClicked}
    />
  );
};

export default DataPage;
