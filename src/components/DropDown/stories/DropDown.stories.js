import React from "react";

import DropDown from "../DropDown";

export default {
  title: "components/DropDown",
  component: DropDown,
};

const Template = (args) => <DropDown {...args} />;

export const Default = Template.bind({});
Default.args = { onChange: () => {}, options: [1, 2] };
