import React from "react";

import VacChart from "../VacChart";
import randomCityData from "../../../mockData/randomCityData";

export default {
  title: "components/VacChart",
  component: VacChart,
};

const Template = (args) => <VacChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  vacData: randomCityData(),
};
