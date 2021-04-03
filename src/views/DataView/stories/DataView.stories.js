import React from "react";

import countryStateData from "../../../mockData/countryStateData.json";

import DataView from "../DataView";
import randomCityData from "../../../mockData/randomCityData";

export default {
  title: "views/DataView",
  component: DataView,
};

const Template = (args) => <DataView {...args} />;

export const Default = Template.bind({});
Default.args = {
  countryStateData: countryStateData.countries,
  getVacData: randomCityData,
  handleEditClicked: (data) => console.log(data),
};
