import React from "react";

import randomCityData from "../../../mockData/randomCityData";

import VacTable from "../VacTable";

export default {
  title: "components/VacTable",
  component: VacTable,
};

const Template = (args) => <VacTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  handleEditClicked: (data) => console.log(data),
  vacData: randomCityData(),
};
