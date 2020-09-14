import React from "react";

import { Meta, Story } from "@storybook/react/types-6-0";
import ErrorList, { ErrorListProps } from "./ErrorList";

export default {
  title: "App/ErrorList",
  component: ErrorList,
  argTypes: {},
} as Meta;

const Template: Story<ErrorListProps> = (args) => <ErrorList {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: "Error: your list doesn't exit - 404",
};
