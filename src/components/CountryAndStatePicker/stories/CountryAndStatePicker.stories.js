import React, { useState } from "react";

import countryStateData from "../../../mockData/countryStateData.json";

import CountryAndStatePicker from "../CountryAndStatePicker";

export default {
  title: "components/CountryAndStatePicker",
  component: CountryAndStatePicker,
};

const Template = (args) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  return (
    <CountryAndStatePicker
      {...args}
      selectedCountry={selectedCountry}
      selectedState={selectedState}
      setSelectedCountry={setSelectedCountry}
      setSelectedState={setSelectedState}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  countryStateData: countryStateData.countries,
};
