import React from "react";

import randomCityData from "../../../mockData/randomCityData";

import EditForm from "../EditForm";

export default {
  title: "components/EditForm",
  component: EditForm,
};

const Template = (args) => <EditForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  formData: randomCityData()[0],
};
