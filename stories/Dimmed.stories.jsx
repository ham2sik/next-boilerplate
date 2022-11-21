import React from "react";
import Dimmed from "../components/common/Dimmed/Dimmed";

export default {
  title: "Common/Dimmed",
  component: Dimmed,
};

const Template = (args) => (
  <Dimmed {...args}>
    <div>children add dom</div>
  </Dimmed>
);

export const Default = Template.bind({});

Default.args = {
  isClear: false,
};
