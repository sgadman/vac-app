import React from "react";

import EditView from "../EditView";
import randomCityData from "../../../mockData/randomCityData";

export default {
  title: "views/EditView",
  component: EditView,
};

const Template = (args) => <EditView {...args} />;

export const Default = Template.bind({});
Default.args = {
  formData: randomCityData()[0],
  handleOnSubmit: (data) => console.log(data),
};
