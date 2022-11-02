import React from "react";
import Logo from "./logo";
import "./logo.css";

export default {
  title: "pdmake/Logo",
  component: Logo,
  argTypes: {
    color: { control: "color" },
    backgroundColor: { control: "color" },
    fontSize: {
      control: "select",
      options: ["1rem", "1.5rem", "2rem", "2.5rem", "3rem", "3.5rem"],
    },
  },
};

const Template = (args) => <Logo {...args} />;

export const LogoSizeAndColor = Template.bind({});
LogoSizeAndColor.args = {
  text: "Back2dev",
};
