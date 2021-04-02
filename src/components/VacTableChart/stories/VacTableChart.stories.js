import React from "react";

import VacTableChart from "../VacTableChart";
import randomCityData from "../../../mockData/randomCityData";

export default {
  title: "components/VacTableChart",
  component: VacTableChart,
};

const Template = (args) => <VacTableChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  handleEditClicked: (data) => console.log(data),
  vacData: randomCityData(),
};
